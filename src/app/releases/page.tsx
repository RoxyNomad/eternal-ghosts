// app/releases/page.tsx
import React from "react";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/Header";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

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
