// src/app/api/events/[id]/route.ts

import { NextResponse } from "next/server";
import { DeleteEventHandler } from "@/modules/events/application/handlers/delete-event.handler";
import { DeleteEventCommand } from "@/modules/events/application/commands/delete-event.command";
import { makeEventRepository } from "@/modules/events/infrastructure/event.factory";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const repo = makeEventRepository();
  const handler = new DeleteEventHandler(repo);

  await handler.execute(new DeleteEventCommand(Number(id)));

  return NextResponse.json({ success: true });
}