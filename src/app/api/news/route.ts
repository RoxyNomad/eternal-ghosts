// src/app/api/news/route.ts
import { NextResponse } from "next/server";
import { DbNewsRepository } from "@/modules/news/infrastructure/db-news.repository";
import { GetAllNewsQuery } from "@/modules/news/application/queries/get-all-news.query";

const query = new GetAllNewsQuery(new DbNewsRepository());

export async function GET() {
    return NextResponse.json(await query.execute());
}
