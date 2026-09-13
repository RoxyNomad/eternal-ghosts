// src/app/releases/page.tsx
import React from "react";
import Image from "next/image" ;

import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

// CQRS / Repository Imports
import { DbReleasesRepository } from "@/modules/releases/infrastructure/db-releases.repository";
import { GetReleasesHandler } from "@/modules/releases/application/handlers/get-releases.handler";

// UI Komponente
import ReleasesList from "@/modules/releases/ui/components/ReleasesList";

export const dynamic = "force-dynamic";

export default async function Releases() {
  // Datenabfrage auf dem Server
  const repository = new DbReleasesRepository();
  const queryHandler = new GetReleasesHandler(repository);
  const releases = await queryHandler.execute();

  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className="html">
          <main>
            <HeaderNav active="releases" />

            <section>
              <div className="logoContainer">
                <Image
                  src="/pictures/favImage.png"
                  alt="Eternal Ghosts Logo"
                  priority
                  width={3840}
                  height={2160}
                  className="logo"
                />
              </div>

              <div className="navPageBar">
                <p className="navPageTitle">RELEASES</p>
                <SocialIcons />
              </div>

              {/* Die ausgelagerte Liste bekommt die Daten injiziert */}
              <ReleasesList releases={releases} />
              
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
