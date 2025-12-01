// src/app/api/events/[id]/route.ts
import { NextResponse } from "next/server";
import { DbEventRepository } from "@/infrastructure/repositories/DbEventRepository";
import { EventService } from "@/infrastructure/services/EventService";

const service = new EventService(new DbEventRepository());

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 🔥 Muss awaited werden

  await service.deleteEvent(Number(id));

  return NextResponse.json({ success: true });
}