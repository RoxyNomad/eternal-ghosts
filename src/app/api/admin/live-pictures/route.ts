// src/app/upload-image/events-pictures/route.ts
import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/DbPictureRepository";
import { PictureService } from "@/modules/gallery/infrastructure/PictureService";

const service = new PictureService(new DbPictureRepository());

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
