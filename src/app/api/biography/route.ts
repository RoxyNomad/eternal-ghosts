// src/app/api/biography/route.ts
import { NextResponse } from "next/server";
import { DbBiographyRepository } from "@/modules/biography/infrastructure/db-biography.repository";
import { GetBiographyQuery } from "@/modules/biography/application/queries/get-biography.query";

const query = new GetBiographyQuery(new DbBiographyRepository());

export async function GET() {
    return NextResponse.json(await query.execute());
}
