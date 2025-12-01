// src/app/upload-image/live-pictures/route.ts
import { NextResponse } from "next/server";
import { DbLivePictureRepository } from "@/infrastructure/repositories/DbLivePictureRepository";
import { LivePictureService } from "@/infrastructure/services/LivePictureService";

const service = new LivePictureService(new DbLivePictureRepository());

export async function DELETE(
	req: Request,
	context: { params: Promise<{ id: string }> }
) {
	const { id } = await context.params; // 🔥 Muss awaited werden

	await service.deleteLivePicture(Number(id));

	return NextResponse.json({ success: true });
}
