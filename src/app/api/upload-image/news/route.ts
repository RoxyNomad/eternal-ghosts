// src/app/api/upload-image/news/route.ts
import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/infrastructure/cloudinary/upload";

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json({ success: false }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await uploadToCloudinary(buffer, "news");

    return NextResponse.json({
        success: true,
        secure_url: result.secure_url,
    });
}
