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
              <div className={styles.navPageTitle}>NEWS</div>
              <SocialIcons variant='news' />
                <Link
                    href='#read-more' className={styles.readMore}>READMORE
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
