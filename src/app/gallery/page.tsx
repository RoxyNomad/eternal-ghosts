// src/app/gallery/page.tsx
import React from "react";

import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import GalleryLocations from "@/modules/gallery/ui/components/GalleryLocations";
import Footer from "@/ui/components/layout/Footer";

import styles from "@/ui/styles/pages/gallery.module.scss";
import Image from "next/image";

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
            <div className='logoContainer'>
              <Image
                  src="/pictures/favImage.png"
                  alt="Eternal Ghosts Logo"
                  priority
                  width={3840}
                  height={2160}
                  className='logo'
              />
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
