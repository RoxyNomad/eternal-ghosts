// src/app/api/admin/releases/route.ts
import { NextResponse } from "next/server";
import { cloudinary } from "@/infrastructure/cloudinary/config"; // Wichtig für das Löschen
import { uploadToCloudinary } from "@/infrastructure/cloudinary/upload";
import { DbReleasesRepository } from "@/modules/releases/infrastructure/db-releases.repository";
import { Release } from "@/modules/releases/domain/releases.entity";

// 1. GET: Alle Releases für die Admin-Liste abrufen
export async function GET() {
  try {
    const repository = new DbReleasesRepository();
    const releases = await repository.findAll();
    return NextResponse.json(releases, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch releases for admin:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// 2. POST: Neues Release mit Cover-Upload erstellen
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

    // Upload in den Ordner 'releases'
    const uploadResult = await uploadToCloudinary(buffer, "releases");

    // public_id aus der URL für eventuelles späteres Löschen isolieren
    // Cloudinary URLs enden meist auf /v12345678/releases/filename.jpg
    const urlParts = uploadResult.secure_url.split("/");
    const filenameWithExtension = urlParts[urlParts.length - 1];
    const filename = filenameWithExtension.split(".")[0];
    const coverImagePublicId = `releases/${filename}`;

    const repository = new DbReleasesRepository();
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

// 3. DELETE: Release aus DB löschen und Asset aus Cloudinary entfernen
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID ist erforderlich" }, { status: 400 });
    }

    const repository = new DbReleasesRepository();
    
    // Zuerst den Datensatz holen, um die public_id des Bildes zu erfahren
    const release = await repository.findById(id);
    
    if (!release) {
      return NextResponse.json({ error: "Release nicht gefunden" }, { status: 404 });
    }

    // A. Aus Cloudinary löschen, falls eine valide ID existiert
    if (release.coverImagePublicId && release.coverImagePublicId !== "unknown") {
      try {
        await cloudinary.uploader.destroy(release.coverImagePublicId);
      } catch (cloudinaryError) {
        console.error("Cloudinary file deletion failed:", cloudinaryError);
        // Wir loggen den Fehler nur, unterbrechen aber den Fluss nicht, damit verwaiste DB-Einträge trotzdem gelöscht werden können
      }
    }

    // B. Aus der Datenbank löschen
    await repository.delete(id);

    return NextResponse.json({ message: "Release erfolgreich gelöscht" }, { status: 200 });
  } catch (error: any) {
    console.error("Release deletion failed:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
