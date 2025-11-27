// src/app/biography/page.tsx
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import PageBar from "@/components/layout/PageBar";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";

import globalStyles from "@/styles/globals.module.css";
import bandStyles from "@/styles/band.module.css";
import biographyStyles from "@/styles/biography.module.css";

export const metadata = {
  title: "Eternal Ghosts – Biography",
};

export default function BiographyPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active="band" />
            {/* ---------- Animated Logo Section ---------- */}
            <section>
              <div
                className={clsx(globalStyles.logoContainer, bandStyles.logoContainer)}
              >
                <AnimatedLogo />
              </div>
              {/* Sub-navigation for the Band page */}
              <PageBar 
                leftLink={{ label: "MEMBERS", href: "/band" }}
                rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
              />
            </section>
            {/* ---------- Biography Text Content ---------- */}
            <section>
              <div className={biographyStyles.biography}>
                <p>
                  Eternal Ghosts is a Metal-Band that was founded in 2022. We stand
                  for Truth, Justice, Human Rights and Liberty.
                </p>
              </div>
            </section>
            <footer className={globalStyles.footer}>{/* Optional */}</footer>
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>
    
  );
}
