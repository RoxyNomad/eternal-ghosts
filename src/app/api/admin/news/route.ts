// src/app/api/admin/news/route.ts
import { NextResponse } from "next/server";
import { DbNewsRepository } from "@/infrastructure/repositories/DbNewsRepository";
import { NewsService } from "@/infrastructure/services/NewsService";

const service = new NewsService(new DbNewsRepository());

export async function POST(req: Request) {
    const body = await req.json();

    const news = await service.createNews({
        title: body.title,
        content: body.content,
        imageUrl: body.image_url,
    });

    return NextResponse.json(news);
}
