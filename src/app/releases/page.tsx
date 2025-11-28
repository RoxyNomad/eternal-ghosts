// app/releases/page.tsx
import React from "react";

import AnimatedLogo from "@/ui/components/logo/RollInLogo";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

export default function Releases() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='releases'/>

            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>

              <div className='navPageBar'>
                <p className='navPageTitle'>RELEASES</p>
                <SocialIcons />
              </div>
            </section>

            <section>
              {/* Optionaler Content */}
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
