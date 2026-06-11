// app/releases/page.tsx
import React from "react";

import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";
import Image from "next/image";

export default function Releases() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='releases'/>

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

              <div className='navPageBar'>
                <p className='navPageTitle'>RELEASES</p>
                <SocialIcons />
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
