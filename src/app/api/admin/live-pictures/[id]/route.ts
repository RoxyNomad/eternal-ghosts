// src/app/api/admin/live-pictures/[id]/route.ts
import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/db-picture.repository";
import { DeletePictureHandler } from "@/modules/gallery/application/handlers/delete-picture.handler";
import { DeletePictureCommand } from "@/modules/gallery/application/commands/delete-picture.command";

export async function GET(
	_: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	const repo = new DbPictureRepository();

	return NextResponse.json(
		await repo.getByLocationId(Number(id))
	);
}

export async function DELETE(
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;

	const repo = new DbPictureRepository();
	const handler = new DeletePictureHandler(repo);

	await handler.execute(
		new DeletePictureCommand(Number(id))
	);

	return NextResponse.json({ success: true });
}