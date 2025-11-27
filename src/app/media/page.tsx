// src/app/media/page.tsx
import React from "react";

import AnimatedLogo from "@/components/logo/ZoomOutLogo";
import HeaderNav from "@/components/layout/Header";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Eternal Ghosts media",
};

const MediaPage = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='media'/>
            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>
              <div className='navPageBar'>
                <p className='navPageTitle'>MEDIA</p>
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
