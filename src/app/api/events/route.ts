// src/app/api/events/route.ts

import { NextResponse } from "next/server";

import { makeEventRepository } from "@/modules/events/infrastructure/event.factory";

import { GetEventsHandler } from "@/modules/events/application/handlers/get-events.handler";
import { CreateEventHandler } from "@/modules/events/application/handlers/create-event.handler";
import { CreateEventCommand } from "@/modules/events/application/commands/create-event.command";

export async function GET() {
  const repo = makeEventRepository();

  const handler = new GetEventsHandler(repo);
  const result = await handler.execute();

  return NextResponse.json(result);
}

export async function POST(req: Request) {
  const repo = makeEventRepository();

  const handler = new CreateEventHandler(repo);

  const body = await req.json();

  const result = await handler.execute(
      new CreateEventCommand(body.title, body.date, body.location)
  );

  return NextResponse.json(result);
}