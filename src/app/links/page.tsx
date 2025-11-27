// src/app/links/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";

import globalStyles from "@/styles/globals.module.css";
import linkStyles from "@/styles/links.module.css";

// Meta-Daten für App Router
export const metadata = {
  title: "Eternal Ghosts links",
};

const LinksPage: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active='links' />

            <section>
              <div className={clsx(globalStyles.logoContainer, linkStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={linkStyles.navPageBar}>
                <p className={linkStyles.navPageTitle}>LINKS</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Hier später weitere Links oder Inhalte */}
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

export default LinksPage;
