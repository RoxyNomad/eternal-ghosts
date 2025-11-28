// app/news/page.tsx
import React from "react";

import AnimatedPictureAndLogo from "@/ui/components/news/NewsAmination";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

import styles from "@/ui/styles/pages/news.module.scss";

export default function News() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active='news'/>
            <section>
              <div className='logoContainer'>
                <AnimatedPictureAndLogo />
              </div>
              <div className={styles.navPageBar}>
                <div className={styles.navPageTitle}>NEWS</div>
                <SocialIcons variant='news' />
                <button className={styles.readMore}>READMORE</button>
              </div>
            </section>
            <Footer />
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>

  );
}
