// src/app/api/admin/gallery/pictures/[id]/route.ts
import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/db-picture.repository";
import { DeletePictureHandler } from "@/modules/gallery/application/handlers/delete-picture.handler";
import { DeletePictureCommand } from "@/modules/gallery/application/commands/delete-picture.command";

export async function GET(
	_: Request,
	{ params }: { params: { id: string } }
) {
	const repo = new DbPictureRepository();
	return NextResponse.json(
		await repo.getByLocationId(Number(params.id))
	);
}


export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const repo = new DbPictureRepository();
	const handler = new DeletePictureHandler(repo);

	await handler.execute(new DeletePictureCommand(Number(params.id)));

	return NextResponse.json({ success: true });
}