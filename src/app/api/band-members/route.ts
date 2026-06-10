// src/app/api/band-members-members/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/modules/band-members/infrastructure/db-band-member.repository";
import { GetBandMembersHandler } from "@/modules/band-members/application/handlers/get-band-members.handler";

export async function GET() {
  const repository = new DbBandMemberRepository();
  const handler = new GetBandMembersHandler(repository);

  const members = await handler.execute();

  return NextResponse.json(members);
}
