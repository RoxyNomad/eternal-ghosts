import { NextResponse } from 'next/server';
import { DbReleasesRepository } from '@/modules/releases/infrastructure/db-releases.repository';
import { CreateReleaseHandler } from '@/modules/releases/application/handlers/create-release.handler';
import { GetReleasesHandler } from '@/modules/releases/application/handlers/get-releases.handler';
import { pool } from '@/utils/db';

const repository = new DbReleasesRepository(pool);

export async function GET() {
  try {
    const handler = new GetReleasesHandler(repository);
    const releases = await handler.execute();
    return NextResponse.json(releases);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch releases' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const handler = new CreateReleaseHandler(repository);
    const newRelease = await handler.execute({
      ...body,
      releaseDate: new Date(body.releaseDate),
    });
    return NextResponse.json(newRelease, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create release' }, { status: 500 });
  }
}