// app/releases/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";

import globalStyles from "@/styles/globals.module.css";
import releaseStyles from "@/styles/releases.module.css";

export default function Releases() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active='releases'/>

            <section>
              <div className={clsx(globalStyles.logoContainer, releaseStyles.logoContainer)}>
                <AnimatedLogo />
              </div>

              <div className={releaseStyles.navPageBar}>
                <p className={releaseStyles.navPageTitle}>RELEASES</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Optionaler Content */}
            </section>

            <footer className={globalStyles.footer}>
              {/* Optional footer content */}
            </footer>
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
