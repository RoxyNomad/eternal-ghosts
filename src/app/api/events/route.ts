// src/app/api/events/route.ts
import { NextResponse } from "next/server";
import { DbEventRepository } from "@/infrastructure/repositories/DbEventRepository";
import { EventService } from "@/infrastructure/services/EventService";

const service = new EventService(new DbEventRepository());

export async function GET() {
  const events = await service.getAllEvents();
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const body = await req.json();
  const event = await service.createEvent(body);
  return NextResponse.json(event);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await service.deleteEvent(Number(params.id));
  return NextResponse.json({ success: true });
}
