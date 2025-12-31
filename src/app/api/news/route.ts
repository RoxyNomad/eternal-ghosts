// src/app/api/news/route.ts
import { NextResponse } from "next/server";
import { DbNewsRepository } from "@/infrastructure/repositories/DbNewsRepository";
import { GetAllNewsQuery } from "@/application/queries/GetAllNewsQuery";

const queryHandler = GetAllNewsQuery(
    new DbNewsRepository()
);

export async function GET() {
    const news = await queryHandler.execute();
    return NextResponse.json(news);
}