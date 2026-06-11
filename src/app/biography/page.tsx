// src/app/biography/page.tsx
import HeaderNav from "@/ui/components/layout/Header";
import PageBar from "@/modules/news/ui/components/PageBarBand";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal";
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

import styles from "@/ui/styles/pages/biography.module.scss";
import Image from "next/image";

import { DbBiographyRepository } from "@/modules/biography/infrastructure/db-biography.repository";
import { GetLatestBiographyQuery } from "@/modules/biography/application/queries/get-latest-biography.query";

export const metadata = {
  title: "Eternal Ghosts – Biography",
};

export default async function BiographyPage() {
  const query = new GetLatestBiographyQuery(new DbBiographyRepository());
  const bio = await query.execute();

  return (
      <NoScrollHorizontal>
        <NoScrollVertical>
          <div className="html">
            <main>
              <HeaderNav active="band" />

              <section>
                <div className="logoContainer">
                  <Image
                      src="/pictures/favImage.png"
                      alt="Eternal Ghosts Logo"
                      priority
                      width={3840}
                      height={2160}
                      className="logo"
                  />
                </div>

                <PageBar
                    leftLink={{ label: "MEMBERS", href: "/band" }}
                    rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
                />

                <div className={styles.biography}>
                  {bio ? (
                      <>
                        <h2>{bio.title}</h2>
                        <p style={{ whiteSpace: "pre-line" }}>{bio.content}</p>
                      </>
                  ) : (
                      <p>No biography found.</p>
                  )}
                </div>
              </section>
            </main>
          </div>

          <Footer />
        </NoScrollVertical>
      </NoScrollHorizontal>
  );
}