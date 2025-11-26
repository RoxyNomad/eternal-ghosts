// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { SendContactMessageCommand } from "@/domain/commands/SendContactMessageCommand";
import { SendContactMessageHandler } from "@/application/commands/SendContactMessageHandler";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const command = new SendContactMessageCommand(body);
    const handler = new SendContactMessageHandler();

    await handler.execute(command);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
