// src/app/api/events/[id]/route.ts
import { NextResponse } from "next/server";
import { deleteEvent } from "@/modules/events/commands";

export async function DELETE(
    _: Request,
    { params }: { params: { id: string } }
) {
  await deleteEvent(Number(params.id));
  return NextResponse.json({ success: true });
}
