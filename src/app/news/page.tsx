// app/news/page.tsx
import React from "react";
import clsx from "clsx";

import AnimatedPictureAndLogo from "@/components/news/NewsAmination";
import HeaderNav from "@/components/layout/HeaderNav";
import SocialIconsNews from "@/components/layout/social-icons/SocialIconsNews";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import globalStyles from "@/styles/globals.module.css";
import newsStyles from "@/styles/news.module.css";

export default function News() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>
            <HeaderNav active='news'/>

            <section>
              <div className={clsx(globalStyles.logoContainer, newsStyles.logoContainer)}>
                <AnimatedPictureAndLogo />
              </div>
              <div className={newsStyles.navPageBar}>
                <div className={newsStyles.navPageTitle}>NEWS</div>
                <SocialIconsNews />
                <button className={newsStyles.readMore}>READMORE</button>
              </div>
            </section>
            <Footer />
          </main>
        </div>
      </NoScrollVertical>
    </NoScrollHorizontal>

  );
}
