import { NextResponse } from "next/server";
import { DbPictureRepository } from "@/modules/gallery/infrastructure/db-picture.repository";
import { GetPicturesByLocationHandler } from "@/modules/gallery/application/handlers/get-pictures-by-location.handler";
import { GetPicturesByLocationQuery } from "@/modules/gallery/application/queries/get-pictures-by-location.query";

export async function GET(
    req: Request,
    { params }: { params: { locationId: string } }
) {
    const locationId = Number(params.locationId);

    if (Number.isNaN(locationId)) {
        return NextResponse.json(
            { error: "Invalid locationId" },
            { status: 400 }
        );
    }

    const repo = new DbPictureRepository();
    const handler = new GetPicturesByLocationHandler(repo);
    const query = new GetPicturesByLocationQuery(locationId);

    const pictures = await handler.execute(query);

    return NextResponse.json(pictures);
}
