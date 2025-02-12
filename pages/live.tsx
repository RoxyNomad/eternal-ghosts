import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import clsx from 'clsx';
import AnimatedLogo from '@/components/ZoomInLogo';
import globalStyles from '../styles/globals.module.css';
import liveStyles from '../styles/live.module.css';

const Live = () => {
  
  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts live</title>
      </Head>

      <main>
        <header className={globalStyles.header}>
          <nav>
            <Link href="/news" className={globalStyles.siteTitle}>NEWS</Link>
            <Link href="/band" className={globalStyles.siteTitle}>BAND</Link>
            <Link href="/live" className={clsx(globalStyles.siteTitle, globalStyles.active)}>LIVE</Link>
            <Link href="/gallery" className={globalStyles.siteTitle}>GALLERY</Link>
            <Link href="/tour" className={globalStyles.siteTitle}>TOUR</Link>
            <Link href="/releases" className={globalStyles.siteTitle}>RELEASES</Link>
            <Link href="/media" className={globalStyles.siteTitle}>MEDIA</Link>
            <Link href="/links" className={globalStyles.siteTitle}>LINKS</Link>
            <Link href="/contact" className={globalStyles.siteTitle}>CONTACT</Link>
          </nav>
        </header>

        <section>
        <div className={clsx(globalStyles.logoContainer, liveStyles.logoContainer)}>
          <div>
            <AnimatedLogo />
          </div>
        </div>
        <div className={liveStyles.navPageBar}>
        <p className={liveStyles.navPageTitle}>LIVE</p>
          <div>
            <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
              <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={liveStyles.facebookIcon} width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas" >
              <Image src="/pictures/youtube-icon.png"  className={liveStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/eternalghosts0/">
              <Image src="/pictures/instagram-icon.png" className={liveStyles.instagramIcon} alt="Eternal Ghosts Instagram" width={94.1084} height={94.1083}/>
            </Link>
          </div>
        </div>
      </section>

        <section>
        </section>

        <footer className={globalStyles.footer}>
          {/* Optional footer content */}
        </footer>
      </main>
    </div>
  );
};

export default Live;