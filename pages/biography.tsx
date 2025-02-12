import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import Head from 'next/head'
import AnimatedLogo from '@/components/RollInLogo';
import globalStyles from '../styles/globals.module.css';
import bandStyles from '../styles/band.module.css';
import biographyStyles from '../styles/biography.module.css';

const Biography = () => {

  return (
    <div className={globalStyles.html}>
      <Head>
        <title>Eternal Ghosts biography</title>
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
          <AnimatedLogo />
        </div>
        <div className={bandStyles.navPageBar}>
          <div>
            <Link href='https://www.facebook.com/profile.php?id=61573032031881'>
              <Image src="/pictures/facebook-icon.png" alt="Eternal Ghosts Facebook" className={bandStyles.facebookIcon} width={94.1084} height={94.1083}/>
            </Link>
          </div>
          <Link className={bandStyles.navPageTitleTwo} href="/band">MEMBERS</Link>
          <div>
            <a href="https://www.youtube.com/watch?v=B_YRm7NKeas" >
              <Image src="/pictures/youtube-icon.png"  className={bandStyles.youtubeIcon} alt="Eternal Ghosts Youtube" width={94.1084} height={94.1083}/>
            </a>
          </div>
          <Link className={clsx(bandStyles.navPageTitleThree, biographyStyles.active)} href="/biography">BIOGRAPHY</Link>
          <div>
            <a href="https://www.instagram.com/eternalghosts0/">
              <Image src="/pictures/instagram-icon.png" className={bandStyles.instagramIcon} alt="Eternal Ghosts Instagram" width={94.1084} height={94.1083}/>
            </a>
          </div>
        </div>
      </section>
			<section>
				<div className={biographyStyles.biography}>
					<p>Eternal Ghosts is a Metal-Band that was founded in 2022. We stand for Truth, Justice, Human Rights and Liberty.</p>
				</div>
			</section>

        <footer className={globalStyles.footer}>
          {/* Optional footer content */}
        </footer>
      </main>
    </div>
  );
};

export default Biography;
