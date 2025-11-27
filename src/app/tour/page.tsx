// src/app/tour/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";

import globalStyles from "@/styles/globals.module.css";
import tourStyles from "@/styles/tour.module.css";

// Meta-Daten für App Router
export const metadata = {
  title: "Eternal Ghosts tour",
};

const Tour: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active='tour'/>

            <section>
              <div className={clsx(globalStyles.logoContainer, tourStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={tourStyles.navPageBar}>
                <p className={tourStyles.navPageTitle}>TOUR</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Hier später Tour-Termine oder Inhalte */}
            </section>

            <footer className={globalStyles.footer}>
              {/* Optional footer content */}
            </footer>
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>
    
  );
};

export default Tour;
