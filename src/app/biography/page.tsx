// src/app/biography/page.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import AnimatedLogo from "@/components/logo/RollInLogo";

import globalStyles from "@/styles/globals.module.css";
import bandStyles from "@/styles/band.module.css";
import biographyStyles from "@/styles/biography.module.css";

/**
 * Biography Page (App Router Version)
 * -----------------------------------
 * Replaces pages/biography.tsx using:
 * - metadata instead of <Head>
 * - correct Link components
 * - client-mode animations
 */
export const metadata = {
  title: "Eternal Ghosts – Biography",
};

export default function BiographyPage() {
  return (
    <div className={globalStyles.html}>

      <main>
        {/* ---------- Navigation Header ---------- */}
        <header className={globalStyles.header}>
          <nav>
            <Link href="/news" className={globalStyles.siteTitle}>
              NEWS
            </Link>
            <Link
              href="/band"
              className={clsx(globalStyles.siteTitle, globalStyles.active)}
            >
              BAND
            </Link>
            <Link href="/live" className={globalStyles.siteTitle}>
              LIVE
            </Link>
            <Link href="/gallery" className={globalStyles.siteTitle}>
              GALLERY
            </Link>
            <Link href="/tour" className={globalStyles.siteTitle}>
              TOUR
            </Link>
            <Link href="/releases" className={globalStyles.siteTitle}>
              RELEASES
            </Link>
            <Link href="/media" className={globalStyles.siteTitle}>
              MEDIA
            </Link>
            <Link href="/links" className={globalStyles.siteTitle}>
              LINKS
            </Link>
            <Link href="/contact" className={globalStyles.siteTitle}>
              CONTACT
            </Link>
          </nav>
        </header>

        {/* ---------- Animated Logo Section ---------- */}
        <section>
          <div
            className={clsx(globalStyles.logoContainer, bandStyles.logoContainer)}
          >
            <AnimatedLogo />
          </div>

          {/* Sub-navigation for the Band page */}
          <div className={bandStyles.navPageBar}>
            <div>
              <Link href="https://www.facebook.com/profile.php?id=61573032031881">
                <Image
                  src="/pictures/facebook-icon.png"
                  alt="Eternal Ghosts Facebook"
                  className={bandStyles.facebookIcon}
                  width={94.1084}
                  height={94.1083}
                />
              </Link>
            </div>

            <Link className={bandStyles.navPageTitleTwo} href="/band">
              MEMBERS
            </Link>

            <div>
              <a href="https://www.youtube.com/watch?v=B_YRm7NKeas">
                <Image
                  src="/pictures/youtube-icon.png"
                  className={bandStyles.youtubeIcon}
                  alt="Eternal Ghosts YouTube"
                  width={94.1084}
                  height={94.1083}
                />
              </a>
            </div>

            <Link
              className={clsx(
                bandStyles.navPageTitleThree,
                biographyStyles.active
              )}
              href="/biography"
            >
              BIOGRAPHY
            </Link>

            <div>
              <a href="https://www.instagram.com/eternalghosts0/">
                <Image
                  src="/pictures/instagram-icon.png"
                  className={bandStyles.instagramIcon}
                  alt="Eternal Ghosts Instagram"
                  width={94.1084}
                  height={94.1083}
                />
              </a>
            </div>
          </div>
        </section>

        {/* ---------- Biography Text Content ---------- */}
        <section>
          <div className={biographyStyles.biography}>
            <p>
              Eternal Ghosts is a Metal-Band that was founded in 2022. We stand
              for Truth, Justice, Human Rights and Liberty.
            </p>
          </div>
        </section>

        <footer className={globalStyles.footer}>{/* Optional */}</footer>
      </main>
    </div>
  );
}
