// src/app/api/admin/locations/route.ts
import { NextResponse } from "next/server";
import { DbLocationRepository } from "@/modules/gallery/infrastructure/DbLocationRepository";

const repo = new DbLocationRepository();

export async function GET() {
  try {
    const locations = await repo.getAll();
    return NextResponse.json(locations);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch locations" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data.name) throw new Error("Name is required");

    const location = await repo.create({ name: data.name, imageUrl: data.imageUrl || null });
    return NextResponse.json(location);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Failed to create location" }, { status: 500 });
  }
}
