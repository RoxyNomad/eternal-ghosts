// src/app/api/band-members/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/infrastructure/repositories/DbBandMemberRepository";
import { GetBandMembersHandler } from "@/application/handlers/GetBandMembersHandler";

export async function GET() {
  const repository = new DbBandMemberRepository();
  const handler = new GetBandMembersHandler(repository);

  const members = await handler.execute();

  return NextResponse.json(members);
}
