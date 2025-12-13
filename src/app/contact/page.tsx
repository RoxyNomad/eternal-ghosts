// src/app/contact/page.tsx
import HeaderNav from "@/ui/components/layout/Header";
import ContactForm from "@/ui/components/forms/ContactForm";
import AnimatedLogo from "@/ui/components/logo/RollInLogo";
import NoScrollHorizontal from "@/ui/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/ui/components/layout/NoScrollVertical";
import SocialIcons from "@/ui/components/layout/SocialIcons";
import Footer from "@/ui/components/layout/Footer";

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
                <AnimatedLogo />
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
