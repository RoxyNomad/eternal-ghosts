// app/news/page.tsx
import React from "react";

import AnimatedPictureAndLogo from "@/components/news/NewsAmination";
import HeaderNav from "@/components/layout/Header";
import SocialIconsNews from "@/components/layout/social-icons/SocialIconsNews";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import styles from "@/styles/pages/news.module.scss";

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
                <SocialIconsNews />
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
