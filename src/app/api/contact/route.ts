// src/app/api/contact/route.ts

import { NextResponse } from "next/server";

import { SendContactMessageHandler } from "@/modules/contact/application/send-contact-message.handler";
import { SendContactMessageCommand } from "@/modules/contact/domain/commands/send-contact-message.command";
import { NodemailerMailService } from "@/modules/contact/infrastructure/nodemailer-mail.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const handler = new SendContactMessageHandler(
        new NodemailerMailService()
    );

    const command = new SendContactMessageCommand(body);

    const result = await handler.execute(command);

    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json(
        { success: false, error: e.message },
        { status: 400 }
    );
  }
}
