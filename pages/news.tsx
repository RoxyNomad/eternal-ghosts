import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import AnimatedPictureAndLogo from '@/components/NewsAnimation';
import clsx from 'clsx';
import globalStyles from '../styles/globals.module.css';
import newsStyles from '../styles/news.module.css';

const News = () => {

  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts</title>
      </Head>

      <main>
        <header className={globalStyles.header}>
          <nav>
            <Link href="/news" className={clsx(globalStyles.siteTitle, globalStyles.active)}>NEWS</Link>
            <Link href="/band" className={globalStyles.siteTitle}>BAND</Link>
            <Link href="/live" className={globalStyles.siteTitle}>LIVE</Link>
            <Link href="/gallery" className={globalStyles.siteTitle}>GALLERY</Link>
            <Link href="/tour" className={globalStyles.siteTitle}>TOUR</Link>
            <Link href="/releases" className={globalStyles.siteTitle}>RELEASES</Link>
            <Link href="/media" className={globalStyles.siteTitle}>MEDIA</Link>
            <Link href="/links" className={globalStyles.siteTitle}>LINKS</Link>
            <Link href="/contact" className={globalStyles.siteTitle}>CONTACT</Link>
          </nav>
        </header>

        <section>
          <div className={clsx(globalStyles.logoContainer, newsStyles.logoContainer)}>
            <AnimatedPictureAndLogo />
          </div>

          <div className={newsStyles.navPageBar}>
            <div className={newsStyles.navPageTitle}>NEWS</div>
            <div>
              <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
                <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={newsStyles.facebookIcon}  width={94.1084} height={94.1083}/>
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas">
                <Image src="/pictures/youtube-icon.png" className={newsStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/eternalghosts0/">
                <Image src="/pictures/instagram-icon.png" className={newsStyles.instagramIcon} alt="Eternal Ghosts Instagram"  width={94.1084} height={94.1083}/>
              </Link>
            </div>

            <button className={newsStyles.readMore}>READMORE</button>
          </div>
        </section>

        <footer className={globalStyles.footer}>
          {/* Optional footer content */}
        </footer>
      </main>
    </div>
  );
};

export default News;
