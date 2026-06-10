// src/app/api/admin/band-members/[id]/route.ts
import { NextResponse } from "next/server";
import { DbBandMemberRepository } from "@/modules/band-members/infrastructure/db-band-member.repository";
import { DeleteBandMemberHandler } from "@/modules/band-members/application/handlers/delete-band-member.handler";
import { DeleteBandMemberCommand } from "@/modules/band-members/application/commands/delete-band-member.command";

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const repo = new DbBandMemberRepository();
  const handler = new DeleteBandMemberHandler(repo);

  await handler.execute(new DeleteBandMemberCommand(Number(id)));

  return NextResponse.json({ success: true });
}
