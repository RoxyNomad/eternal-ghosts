// src/app/api/events/route.ts
import { NextResponse } from "next/server";
import { getAllEvents } from "@/modules/events/queries";
import { createEvent } from "@/modules/events/commands";

export async function GET() {
  const events = await getAllEvents();
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const body = await req.json();
  const event = await createEvent(body);
  return NextResponse.json(event);
}
