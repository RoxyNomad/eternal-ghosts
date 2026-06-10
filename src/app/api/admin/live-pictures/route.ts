// src/app/api/admin/gallery/pictures/route.ts
import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/db-picture.repository";
import { CreatePictureHandler } from "@/modules/gallery/application/handlers/create-picture.handler";
import { GetAllPicturesHandler } from "@/modules/gallery/application/handlers/get-all-pictures.handler";
import { CreatePictureCommand } from "@/modules/gallery/application/commands/create-picture.command";

export async function GET() {
  const repo = new DbPictureRepository();
  const handler = new GetAllPicturesHandler(repo);
  return NextResponse.json(await handler.execute());
}

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.locationId || !body.date || !body.imageUrl) {
    return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
    );
  }

  const repo = new DbPictureRepository();
  const handler = new CreatePictureHandler(repo);

  const command = new CreatePictureCommand(
      body.date,
      Number(body.locationId),
      body.imageUrl
  );

  return NextResponse.json(await handler.execute(command), { status: 201 });
}
