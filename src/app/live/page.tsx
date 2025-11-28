// src/app/live/page.tsx
import React from "react";

import AnimatedLogo from "@/ui/components/logo/ZoomInLogo";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";
import EventList from '@/ui/components/live/EventsList'

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
              <EventList />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>   
  );
};

export default LivePage;
