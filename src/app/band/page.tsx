// app/band/page.tsx
import clsx from "clsx";
import Image from "next/image";

import AnimatedBandMember from "@/components/band/AminatedBandMember";
import HeaderNav from "@/components/layout/HeaderNav";
import PageBar from "@/components/layout/PageBar";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";

import globalStyles from "@/styles/globals.module.css";
import bandStyles from "@/styles/band.module.css";

export const metadata = {
  title: "Eternal Ghosts – Band",
  description: "Eternal Ghosts Band Members",
};

export default function BandPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active="band" />

            <section>
              <div className={clsx(globalStyles.logoContainer, bandStyles.logoContainer)}>
                <Image
                  src="/pictures/favImage.png"
                  alt="Eternal Ghosts Logo"
                  className={bandStyles.logo}
                  width={3840}
                  height={2160}
                />
              </div>

              {/* PageBar mit Facebook (links) und YouTube + Instagram (rechts) */}
              <PageBar 
                leftLink={{ label: "MEMBERS", href: "/band" }}
                rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
              />

            </section>

            <section>
              <AnimatedBandMember />
            </section>

            <footer className={globalStyles.footer}></footer>
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
