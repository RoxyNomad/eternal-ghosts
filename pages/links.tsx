import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import clsx from 'clsx';
import AnimatedLogo from '@/components/RollInLogo';
import globalStyles from '../styles/globals.module.css';
import linkStyles from '../styles/links.module.css';

const Links = () => {
  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts links</title>
      </Head>

      <main>
        <header className={globalStyles.header}>
          <nav>
            <Link href="/news" className={globalStyles.siteTitle}>NEWS</Link>
            <Link href="/band" className={globalStyles.siteTitle}>BAND</Link>
            <Link href="/live" className={globalStyles.siteTitle}>gallery</Link>
            <Link href="/gallery" className={globalStyles.siteTitle}>GALLERY</Link>
            <Link href="/tour" className={globalStyles.siteTitle}>TOUR</Link>
            <Link href="/releases" className={globalStyles.siteTitle}>RELEASES</Link>
            <Link href="/media" className={globalStyles.siteTitle}>MEDIA</Link>
            <Link href="/links" className={clsx(globalStyles.siteTitle, globalStyles.active)}>LINKS</Link>
            <Link href="/contact" className={globalStyles.siteTitle}>CONTACT</Link>
          </nav>
        </header>

        <section>
        <div className={clsx(globalStyles.logoContainer, linkStyles.logoContainer)}>
          <AnimatedLogo />
        </div>
        <div className={linkStyles.navPageBar}>
        <p className={linkStyles.navPageTitle}>LINKS</p>
          <div>
            <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
              <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={linkStyles.facebookIcon} width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas" >
              <Image src="/pictures/youtube-icon.png"  className={linkStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/eternalghosts0/">
              <Image src="/pictures/instagram-icon.png" className={linkStyles.instagramIcon} alt="Eternal Ghosts Instagram" width={94.1084} height={94.1083}/>
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

export default Links;
