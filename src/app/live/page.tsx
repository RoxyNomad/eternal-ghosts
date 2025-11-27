// src/app/live/page.tsx
import React from "react";

import AnimatedLogo from "@/components/logo/ZoomInLogo";
import HeaderNav from "@/components/layout/Header";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Eternal Ghosts live",
};

const LivePage: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active="live" />
            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>
              <div className='navPageBar'>
                <p className='navPageTitle'>LIVE</p>
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
