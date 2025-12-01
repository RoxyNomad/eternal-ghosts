// src/app/api/admin/band-members/[id]/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/infrastructure/repositories/DbBandMemberRepository";
import { BandMemberService } from "@/infrastructure/services/BandMemberService";

const service = new BandMemberService(new DbBandMemberRepository());

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 🔥 Muss awaited werden

  await service.deleteMember(Number(id));

  return NextResponse.json({ success: true });
}