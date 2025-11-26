// app/band/page.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

// Client-Komponente für Animation
import AnimatedBandMember from "@/components/band/AminatedBandMember";

import globalStyles from "@/styles/globals.module.css";
import bandStyles from "@/styles/band.module.css";

// METADATA (nur in Server-Komponenten möglich)
export const metadata = {
  title: "Eternal Ghosts – Band",
  description: "Eternal Ghosts Band Members",
};

export default function BandPage() {
  return (
    <div className={globalStyles.html}>
      <main>
        {/* Navigation Header */}
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

        {/* Logo + Social Icons + Section Navigation */}
        <section>
          <div
            className={clsx(
              globalStyles.logoContainer,
              bandStyles.logoContainer
            )}
          >
            <Image
              src="/pictures/favImage.png"
              alt="Eternal Ghosts Logo"
              className={bandStyles.logo}
              width={3840}
              height={2160}
            />
          </div>

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

            <Link
              className={clsx(
                bandStyles.navPageTitleTwo,
                bandStyles.active
              )}
              href="/band"
            >
              MEMBERS
            </Link>

            <div>
              <Link href="https://www.youtube.com/watch?v=B_YRm7NKeas">
                <Image
                  src="/pictures/youtube-icon.png"
                  className={bandStyles.youtubeIcon}
                  alt="Eternal Ghosts Youtube"
                  width={94.1084}
                  height={94.1083}
                />
              </Link>
            </div>

            <Link className={bandStyles.navPageTitleThree} href="/biography">
              BIOGRAPHY
            </Link>

            <div>
              <Link href="https://www.instagram.com/eternalghosts0/">
                <Image
                  src="/pictures/instagram-icon.png"
                  className={bandStyles.instagramIcon}
                  alt="Eternal Ghosts Instagram"
                  width={94.1084}
                  height={94.1083}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Band Member Animation (CLIENT) */}
        <section>
          <AnimatedBandMember />
        </section>

        {/* Footer */}
        <footer className={globalStyles.footer}></footer>
      </main>
    </div>
  );
}
