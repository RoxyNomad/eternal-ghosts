import { NextResponse } from 'next/server';
import { pool } from '@/utils/db';
import { DbReleasesRepository } from '@/modules/releases/infrastructure/db-releases.repository';
import { deleteCloudinaryImage } from '@/infrastructure/cloudinary/config';
import { deleteAudioFromR2 } from '@/infrastructure/cloudflare/r2-client';

const repository = new DbReleasesRepository(pool);

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Release vorab aus der DB abfragen, um die File-IDs zu erhalten
    const release = await repository.findById(id);

    if (!release) {
      return NextResponse.json({ error: 'Release not found' }, { status: 404 });
    }

    if (release.coverImagePublicId) {
      await deleteCloudinaryImage(release.coverImagePublicId);
    }

    if (release.audioPublicId) {
      await deleteAudioFromR2(release.audioPublicId);
    }

    await repository.delete(id);

    return NextResponse.json({ message: 'Release and associated assets deleted successfully' });
  } catch (error) {
    console.error('DELETE Release Error:', error);
    return NextResponse.json({ error: 'Failed to delete release' }, { status: 500 });
  }
}