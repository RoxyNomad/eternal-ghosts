// src/app/gallery/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import globalStyles from "@/styles/globals.module.css";
import galleryStyles from "@/styles/gallery.module.css";

// Meta-Daten für App Router
export const metadata = {
  title: "Eternal Ghosts gallery",
};

const Gallery: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active="gallery" />

            <section>
              <div className={clsx(globalStyles.logoContainer, galleryStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={galleryStyles.navPageBar}>
                <p className={galleryStyles.navPageTitle}>GALLERY</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Hier können später Galerie-Bilder eingefügt werden */}
            </section>

          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
};

export default Gallery;
