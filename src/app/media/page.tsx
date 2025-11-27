// src/app/media/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/ZoomOutLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import globalStyles from "@/styles/globals.module.css";
import mediaStyles from "@/styles/media.module.css";

// Seiten-Metadaten
export const metadata = {
  title: "Eternal Ghosts media",
};

const MediaPage = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active='media'/>

            <section>
              <div className={clsx(globalStyles.logoContainer, mediaStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={mediaStyles.navPageBar}>
                <p className={mediaStyles.navPageTitle}>MEDIA</p>
                <SocialIcons />
              </div>
            </section>
            <section>
              {/* Hier später Medien-Inhalte */}
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
};

export default MediaPage;
