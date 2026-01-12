import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/db-picture.repository";

export async function GET(
    _req: Request,
    context: { params: Promise<{ locationId: string }> }
) {
    const { locationId } = await context.params;
    const id = Number(locationId);

    if (Number.isNaN(id)) {
        return NextResponse.json(
            { error: "Invalid locationId" },
            { status: 400 }
        );
    }

    const repo = new DbPictureRepository();
    const pictures = await repo.getByLocationId(id);

    return NextResponse.json(pictures);
}
