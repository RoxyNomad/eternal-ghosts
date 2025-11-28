// app/band/page.tsx
import Image from "next/image";

import AnimatedBandMembers from "@/ui/components/band/AminatedBandMembers";
import HeaderNav from "@/ui/components/layout/Header";
import PageBar from "@/ui/components/layout/PageBarBand";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

import styles from "@/ui/styles/pages/band.module.scss";

export const metadata = {
  title: "Eternal Ghosts – Band",
  description: "Eternal Ghosts Band Members",
};

export default function BandPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active="band" />
            <section>
              <div className='logoContainer'>
                <Image
                  src="/pictures/favImage.png"
                  alt="Eternal Ghosts Logo"
                  width={3840}
                  height={2160}
                  className={styles.logo}
                />
              </div>
              <PageBar 
                leftLink={{ label: "MEMBERS", href: "/band" }}
                rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
              />
            </section>
            <section>
              <AnimatedBandMembers />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
