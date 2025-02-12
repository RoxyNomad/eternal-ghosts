import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import clsx from 'clsx';
import AnimatedBandMember from '@/components/BandMemberAnimation';
import globalStyles from '../styles/globals.module.css';
import bandStyles from '../styles/band.module.css';

const Band = () => {

  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts band</title>
      </Head>
      
      <main>
        <header className={globalStyles.header}>
        <nav>
            <Link href="/news" className={globalStyles.siteTitle}>NEWS</Link>
            <Link href="/band" className={clsx(globalStyles.siteTitle, globalStyles.active)}>BAND</Link>
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
        <div className={clsx(globalStyles.logoContainer, bandStyles.logoContainer)}>
          <Image src="/pictures/favImage.png" alt="Eternal Ghosts Logo" className={bandStyles.logo} width={3840} height={2160}/>
        </div>
        <div className={ bandStyles.navPageBar}>
          <div>
            <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
              <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={bandStyles.facebookIcon} width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <Link className={clsx(bandStyles.navPageTitleTwo, bandStyles.active)} href="/band">MEMBERS</Link>
          <div>
            <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas" >
              <Image src="/pictures/youtube-icon.png"  className={bandStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <Link className={bandStyles.navPageTitleThree} href="/biography">BIOGRAPHY</Link>
          <div>
            <Link href="https://www.instagram.com/eternalghosts0/">
              <Image src="/pictures/instagram-icon.png" className={bandStyles.instagramIcon} alt="Eternal Ghosts Instagram" width={94.1084} height={94.1083}/>
            </Link>
          </div>
        </div>
      </section>
			<section>
				<AnimatedBandMember />
			</section>

        <footer className={globalStyles.footer}>
          {/* Optional footer content */}
        </footer>
      </main>
    </div>
  );
};

export default Band;
