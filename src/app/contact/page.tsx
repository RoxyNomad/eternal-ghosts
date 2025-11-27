// src/app/contact/page.tsx
import clsx from "clsx";
import HeaderNav from "@/components/layout/HeaderNav";
import ContactForm from "@/components/forms/ContactForm";
import AnimatedLogo from "@/components/logo/RollInLogo";
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"
import NoScrollVertical from "@/components/layout/NoScrollVertical";
import SocialIcons from "@/components/layout/social-icons/SocialIcons";
import Footer from "@/components/layout/Footer";

import globalStyles from "@/styles/globals.module.css";
import contactStyles from "@/styles/contact.module.css";

export const metadata = {
  title: "Contact - Eternal Ghosts",
  description: "Get in touch with Eternal Ghosts for inquiries, bookings, and more.",
};

export default function ContactPage() {
  return (
    <NoScrollHorizontal>
      <NoScrollVertical>
        <div className={globalStyles.html}>
          <main>

            {/* Navigation */}
            <HeaderNav active="contact" />

            {/* Logo */}
            <section>
              <div className={clsx(globalStyles.logoContainer, contactStyles.logoContainer)}>
                <AnimatedLogo />
              </div>
              <div className={contactStyles.navPageBar}>
                <p className={contactStyles.navPageTitle}>CONTACT</p>
                <SocialIcons />
              </div>
            </section>

            {/* Contact Form */}
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
