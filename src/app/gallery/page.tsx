// src/app/gallery/page.tsx
import React from "react";

import AnimatedLogo from "@/ui/components/logo/RollInLogo";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import GalleryLocations from "@/ui/components/gallery/GalleryLocations";
import Footer from "@/ui/components/layout/Footer";

import styles from "@/ui/styles/pages/gallery.module.scss";

export const metadata = {
  title: "Eternal Ghosts gallery",
};

const Gallery: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <div className="html">
        <main>
          <HeaderNav active="gallery" />
          <section>
            <div className="logoContainer">
              <AnimatedLogo />
            </div>
            <div className="navPageBar">
              <p className="navPageTitle">GALLERY</p>
              <SocialIcons />
            </div>
            <div className={styles.locationsContainer}>
              <GalleryLocations />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </NoScrollHorizontal>
  );
};

export default Gallery;
