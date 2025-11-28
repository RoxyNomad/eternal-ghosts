// src/app/gallery/page.tsx
import React from "react";

import AnimatedLogo from "@/ui/components/logo/RollInLogo";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

export const metadata = {
  title: "Eternal Ghosts gallery",
};

const Gallery: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active="gallery" />
            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>
              <div className='navPageBar'>
                <p className='navPageTitle'>GALLERY</p>
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
