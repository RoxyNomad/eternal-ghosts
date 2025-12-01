// src/app/upload-image/live-pictures/route.ts
import { NextResponse } from "next/server";
import { DbLivePictureRepository } from "@/infrastructure/repositories/DbLivePictureRepository";
import { LivePictureService } from "@/infrastructure/services/LivePictureService";

const service = new LivePictureService(new DbLivePictureRepository());

export async function GET() {
  const pictures = await service.getAllLivePictures();
  return NextResponse.json(pictures);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newPicture = {
    ...body,
    date: new Date(body.date),
  };

  const picture = await service.createLivePicture(newPicture);
  return NextResponse.json(picture);
}
