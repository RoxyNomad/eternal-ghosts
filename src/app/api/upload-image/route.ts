import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload nach Cloudinary
    const upload = await cloudinary.uploader.upload_stream(
      { folder: "eternal-ghosts" },
      (error, result) => {}
    );

    const stream = cloudinary.uploader.upload_stream(
      { folder: "eternal-ghosts" },
      (error, result) => {
        if (error) {
          console.error(error);
          return;
        }
      }
    );

    stream.end(buffer);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
