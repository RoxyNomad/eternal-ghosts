// src/app/api/admin/releases/route.ts
import { NextResponse } from "next/server";
import { pool } from "@/utils/db";
import { cloudinary } from "@/infrastructure/cloudinary/config"; // Wichtig für das Löschen
import { uploadToCloudinary } from "@/infrastructure/cloudinary/upload";
import { DbReleasesRepository } from "@/modules/releases/infrastructure/db-releases.repository";
import { Release } from "@/modules/releases/domain/releases.entity";

export async function GET() {
  try {
    const repository = new DbReleasesRepository(pool);
    const releases = await repository.findAll();
    return NextResponse.json(releases, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch releases for admin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const type = formData.get("type") as Release["type"]; 
    const releaseDate = formData.get("releaseDate") as string;
    const description = formData.get("description") as string | null;
    const file = formData.get("cover") as File | null;

    if (!title || !type || !releaseDate || !file) {
      return NextResponse.json({ error: "Fehlende Pflichtfelder" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadResult = await uploadToCloudinary(buffer, "releases");
    const urlParts = uploadResult.secure_url.split("/");
    const filenameWithExtension = urlParts[urlParts.length - 1];
    const filename = filenameWithExtension.split(".")[0];
    const coverImagePublicId = `releases/${filename}`;
    const repository = new DbReleasesRepository(pool);
    const newRelease = await repository.create({
      title,
      type,
      releaseDate: new Date(releaseDate),
      coverImageUrl: uploadResult.secure_url,
      coverImagePublicId,
      description: description || undefined,
    });

    return NextResponse.json(newRelease, { status: 201 });
  } catch (error: any) {
    console.error("Release creation failed:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID ist erforderlich" }, { status: 400 });
    }

    const repository = new DbReleasesRepository(pool);
    const release = await repository.findById(id);
    
    if (!release) {
      return NextResponse.json({ error: "Release nicht gefunden" }, { status: 404 });
    }

    if (release.coverImagePublicId && release.coverImagePublicId !== "unknown") {
      try {
        await cloudinary.uploader.destroy(release.coverImagePublicId);
      } catch (cloudinaryError) {
        console.error("Cloudinary file deletion failed:", cloudinaryError);
      }
    }

    await repository.delete(id);

    return NextResponse.json({ message: "Release erfolgreich gelöscht" }, { status: 200 });
  } catch (error: any) {
    console.error("Release deletion failed:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
