// app/news/page.tsx
import React from "react";
import Link from "next/link";

import AnimatedPictureAndLogo from "../../modules/news/ui/components/NewsAmination";
import HeaderNav from "@/ui/components/layout/Header";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import Footer from "@/ui/components/layout/Footer";
import ReadMore from "../../modules/news/ui/components/ReadMore";

import styles from "@/ui/styles/pages/news.module.scss";

export default function News() {
  return (
    <NoScrollHorizontal>
      <div className='html'>
        <main>
          <HeaderNav active='news'/>
          <section>
            <div className='logoContainer'>
              <AnimatedPictureAndLogo />
            </div>
            <div className={styles.navPageBar}>
              {/* 1. Titel ganz links */}
              <Link href="/news" className={styles.navPageTitle}>
                NEWS
              </Link>

              {/* 2. Social Icons exakt in der Mitte verteilt */}
              <SocialIcons variant='news' />

              {/* 3. Read More Button ganz rechts */}
              <Link href='#read-more' className={styles.readMore}>
                READ MORE
              </Link>
            </div>

          </section>
          <section id='read-more'>
            <ReadMore />
          </section>
          <Footer />
        </main>
      </div>
    </NoScrollHorizontal>

  );
}
