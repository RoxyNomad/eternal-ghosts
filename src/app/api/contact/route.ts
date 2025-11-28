// src/app/api/contact/route.ts

import { NextResponse } from "next/server";

import { SendContactMessageHandler } from "@/application/handlers/SendContactMessageHandler";
import { SendContactMessageCommand } from "@/application/commands/SendContactMessageCommand";
import { NodemailerMailService } from "@/infrastructure/services/NodemailerMailService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const handler = new SendContactMessageHandler(new NodemailerMailService());
    const command = new SendContactMessageCommand(body);

    const result = await handler.execute(command);

    return NextResponse.json(result, { status: 200 });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
