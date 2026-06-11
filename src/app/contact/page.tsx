// src/app/contact/page.tsx
import HeaderNav from "@/ui/components/layout/Header";
import ContactForm from "@/modules/contact/ui/components/ContactForm";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import Footer from "@/ui/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: "Contact - Eternal Ghosts",
  description: "Get in touch with Eternal Ghosts for inquiries, bookings, and more.",
};

export default function ContactPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className='html'>
          <main>
            <HeaderNav active="contact" />
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
              <div className='navPageBar'>
                <p className='navPageTitle'>CONTACT</p>
                <SocialIcons />
              </div>
              <ContactForm />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
