// src/app/api/admin/band-members/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/modules/band-members/infrastructure/db-band-member.repository";
import { CreateBandMemberHandler } from "@/modules/band-members/application/handlers/create-band-member.handler";
import { CreateBandMemberCommand } from "@/modules/band-members/application/commands/create-band-member.command";
import { GetBandMembersHandler } from "@/modules/band-members/application/handlers/get-band-members.handler";

export async function GET() {
  const repo = new DbBandMemberRepository();
  const handler = new GetBandMembersHandler(repo);

  return NextResponse.json(await handler.execute());
}

export async function POST(req: Request) {
  const body = await req.json();

  const repo = new DbBandMemberRepository();
  const handler = new CreateBandMemberHandler(repo);

  const command = new CreateBandMemberCommand(
      body.name,
      body.role,
      body.imageUrl
  );

  const member = await handler.execute(command);

  return NextResponse.json(member);
}
