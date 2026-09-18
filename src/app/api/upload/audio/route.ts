import { NextResponse } from 'next/server';
import { uploadAudioToR2 } from '@/infrastructure/cloudflare/r2-client';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const { url, key } = await uploadAudioToR2(file);
    return NextResponse.json({ url, key });
  } catch (error) {
    console.error('R2 Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}