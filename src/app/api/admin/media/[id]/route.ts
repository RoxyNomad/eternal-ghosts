import { NextResponse } from "next/server";
import { DbMediaRepository } from "@/modules/media/infrastructure/db-media.repository";
import { DeleteMediaHandler } from "@/modules/media/application/handler/delete-media.handler";
import { DeleteMediaCommand } from "@/modules/media/application/commands/delete-media.command";

const repo = new DbMediaRepository();
const deleteHandler = new DeleteMediaHandler(repo);

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const mediaId = Number(id);

    const command = new DeleteMediaCommand(mediaId);
    await deleteHandler.execute(command);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Failed to delete media item";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}