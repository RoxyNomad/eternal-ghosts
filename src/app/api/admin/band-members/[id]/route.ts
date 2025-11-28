// src/app/api/admin/band-members/[id]/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/infrastructure/repositories/DbBandMemberRepository";
import { BandMemberService } from "@/infrastructure/services/BandMemberService";

const service = new BandMemberService(new DbBandMemberRepository());

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await service.deleteMember(Number(params.id));
  return NextResponse.json({ success: true });
}
