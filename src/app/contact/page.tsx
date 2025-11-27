// src/app/contact/page.tsx
import HeaderNav from "@/components/layout/Header";
import ContactForm from "@/components/forms/ContactForm";
import AnimatedLogo from "@/components/logo/RollInLogo";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import Footer from "@/components/layout/Footer";

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
            </section>
            <section>
              <ContactForm />
            </section>
          </main>
        </div>
        <Footer />
      </NoScrollVertical>
    </NoScrollHorizontal>
  );
}
