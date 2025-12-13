// src/app/tour/page.tsx
import React from "react";

import AnimatedLogo from "@/ui/components/logo/RollInLogo";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

export const metadata = {
  title: "Eternal Ghosts tour",
};

const Tour: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='tour'/>
            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>
              <div className='navPageBar'>
                <p className='navPageTitle'>TOUR</p>
                <SocialIcons />
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
    
  );
};

export default Tour;
