// src/app/biography/page.tsx
import AnimatedLogo from "@/components/logo/RollInLogo";
import HeaderNav from "@/components/layout/Header";
import PageBar from "@/components/layout/PageBar";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import Footer from "@/components/layout/Footer";

import styles from "@/styles/pages/biography.module.scss";

export const metadata = {
  title: "Eternal Ghosts – Biography",
};

export default function BiographyPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active="band" />
            <section>
              <div
                className='logoContainer'
              >
                <AnimatedLogo />
              </div>
              {/* Sub-navigation for the Band page */}
              <PageBar 
                leftLink={{ label: "MEMBERS", href: "/band" }}
                rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
              />
            </section>
            <section>
              <div className={styles.biography}>
                <p>
                  Eternal Ghosts is a Metal-Band that was founded in 2022. We stand
                  for Truth, Justice, Human Rights and Liberty.
                </p>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
    
  );
}
