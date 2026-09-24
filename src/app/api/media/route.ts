import { NextResponse } from "next/server";
import { DbMediaRepository } from "@/modules/media/infrastructure/db-media.repository";
import { GetAllMediaHandler } from "@/modules/media/application/handler/get-all-media.handler";
import { CreateMediaHandler } from "@/modules/media/application/handler/create-media.handler";
import { CreateMediaCommand } from "@/modules/media/application/commands/create-media.command";

export const dynamic = "force-dynamic";

const repo = new DbMediaRepository();
const getAllHandler = new GetAllMediaHandler(repo);
const createHandler = new CreateMediaHandler(repo);

export async function GET() {
  try {
    const videos = await getAllHandler.execute();
    return NextResponse.json(videos);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, youtubeUrl, description } = body;

    if (!title || !youtubeUrl) {
      return NextResponse.json(
        { error: "Title and YouTube URL are required" },
        { status: 400 }
      );
    }

    const command = new CreateMediaCommand(title, youtubeUrl, description);
    const newVideo = await createHandler.execute(command);

    return NextResponse.json(newVideo, { status: 201 });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Failed to add video";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}