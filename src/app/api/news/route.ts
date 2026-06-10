// src/app/api/news/route.ts

import { NextResponse } from "next/server";
import { DbNewsRepository } from "@/modules/news/infrastructure/db-news.repository";
import { GetAllNewsHandler } from "@/modules/news/application/handlers/get-all-news.handler";

export async function GET() {
    const repo = new DbNewsRepository();
    const handler = new GetAllNewsHandler(repo);

    const result = await handler.execute();

    return NextResponse.json(result);
}