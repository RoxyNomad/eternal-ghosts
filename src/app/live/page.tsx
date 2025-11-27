// src/app/live/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/ZoomInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import globalStyles from "@/styles/globals.module.css";
import liveStyles from "@/styles/live.module.css";

// Meta-Daten für App Router
export const metadata = {
  title: "Eternal Ghosts live",
};

const LivePage: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active="live" />

            <section>
              <div className={clsx(globalStyles.logoContainer, liveStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={liveStyles.navPageBar}>
                <p className={liveStyles.navPageTitle}>LIVE</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Hier können später weitere Inhalte eingefügt werden */}
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>   
  );
};

export default LivePage;
