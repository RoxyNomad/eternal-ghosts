// src/app/api/gallery/locations/route.ts
import { NextResponse } from "next/server";
import { DbLocationRepository } from "@/modules/gallery/infrastructure/db-location.repository";
import { GetAllLocationsHandler } from "@/modules/gallery/application/handlers/get-all-locations.handler";
import { GetAllLocationsQuery } from "@/modules/gallery/application/queries/get-all-locations.query";

export async function GET() {
  const repo = new DbLocationRepository();
  const handler = new GetAllLocationsHandler(repo);

  return NextResponse.json(
      await handler.execute(new GetAllLocationsQuery())
  );
}
