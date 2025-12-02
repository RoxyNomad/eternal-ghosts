// src/app/api/gallery/[location]/route.ts
import { NextResponse } from "next/server";
import { DbLivePictureRepository } from "@/infrastructure/repositories/DbLivePictureRepository";

export async function GET(_: Request, { params }: { params: { location: string } }) {
  try {
    const location = decodeURIComponent(params.location);
    const repo = new DbLivePictureRepository();
    const pictures = await repo.getByLocation(location);
    return NextResponse.json(pictures);
  } catch (err) {
    console.error("GET /api/gallery/[location] error:", err);
    return NextResponse.json({ error: "Failed to load pictures" }, { status: 500 });
  }
}
