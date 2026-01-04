// src/app/upload-image/events-pictures/route.ts
import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/DbPictureRepository";
import { PictureService } from "@/modules/gallery/infrastructure/PictureService";

const service = new PictureService(new DbPictureRepository());

export async function DELETE(
	req: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params; // 🔥 Muss awaited werden

	await service.deleteLivePicture(Number(id));

	return NextResponse.json({ success: true });
}
