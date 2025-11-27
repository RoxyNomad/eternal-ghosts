// src/app/links/page.tsx
import React from "react";

import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/Header";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Eternal Ghosts links",
};

const LinksPage: React.FC = () => {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='links' />
            <section>
              <div className='logoContainer'>
                <AnimatedLogo />
              </div>
              <div className='navPageBar'>
                <p className='navPageTitle'>LINKS</p>
                <SocialIcons />
              </div>
            </section>
            <section>
              {/* Hier später weitere Links oder Inhalte */}
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
};

export default LinksPage;
