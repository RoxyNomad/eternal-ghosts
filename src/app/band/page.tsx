// app/band/page.tsx
import Image from "next/image";

import AnimatedBandMember from "@/components/band/AminatedBandMember";
import HeaderNav from "@/components/layout/Header";
import PageBar from "@/components/layout/PageBar";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import styles from "@/styles/pages/band.module.scss";

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
              <AnimatedBandMember />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
