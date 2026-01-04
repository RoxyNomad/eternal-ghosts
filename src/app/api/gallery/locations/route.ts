// src/app/api/gallery/locations/route.ts
import { NextResponse } from "next/server";
import { DbLocationRepository } from "@/modules/gallery/infrastructure/DbLocationRepository";

export async function GET() {
  try {
    const repo = new DbLocationRepository();
    const locations = await repo.getAll();
    return NextResponse.json(locations);
  } catch (err) {
    console.error("GET /api/gallery/locations error:", err);
    return NextResponse.json({ error: "Failed to load locations" }, { status: 500 });
  }
}
