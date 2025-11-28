// src/app/api/admin/band-members/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/infrastructure/repositories/DbBandMemberRepository";
import { BandMemberService } from "@/infrastructure/services/BandMemberService";

const service = new BandMemberService(new DbBandMemberRepository());

export async function GET() {
  const members = await service.getAllMembers();
  return NextResponse.json(members);
}

export async function POST(req: Request) {
  const body = await req.json();
  const member = await service.createMember(body);
  return NextResponse.json(member);
}
