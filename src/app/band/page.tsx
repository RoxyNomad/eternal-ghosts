// app/band-members/page.tsx
import Image from "next/image";

import AnimatedBandMembers from "@/modules/band-members/ui/components/AminatedBandMembers";
import HeaderNav from "@/ui/components/layout/Header";
import PageBar from "@/modules/news/ui/components/PageBarBand";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import Footer from "@/ui/components/layout/Footer";

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
                  priority
                  width={3840}
                  height={2160}
                  className='logo'
                />
              </div>
              <PageBar 
                leftLink={{ label: "MEMBERS", href: "/band" }}
                rightLink={{ label: "BIOGRAPHY", href: "/biography" }}
              />
              <AnimatedBandMembers />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
