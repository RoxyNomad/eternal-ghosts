// app/terms/page.tsx
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal";

import termsStyles from "@/styles/terms.module.css";

export const metadata = {
  title: "Eternal Ghosts – Terms of Service",
	description: "Terms of Service of Eternal Ghosts.",
};

export default function TermsPage() {
  return (
    <NoScrollHorizontal>
      <main className={termsStyles.termsPage}>
        <section className={termsStyles.termsContent}>
          <h1>Terms of Service</h1>
          <p>
            <strong>Last Updated:</strong> November 27, 2025
          </p>

          <p>
            Welcome to <strong>Eternal Ghosts</strong>! Please read these Terms
            of Service (“Terms”) carefully before using our website or any of
            our online services. By accessing or using our content, you agree to
            be bound by these Terms.
          </p>

          <h2>1. Acceptance of the Terms</h2>
          <p>
            By using our website, social media platforms, or any digital
            services provided by Eternal Ghosts, you acknowledge and agree to
            these Terms. If you do not agree, you may not use our website.
          </p>

          <h2>2. Use of the Website</h2>
          <ul>
            <li>Use is limited to private, non-commercial purposes.</li>
            <li>
              You may not upload, distribute, or share content that is illegal,
              defamatory, obscene, or harassing.
            </li>
            <li>
              You may not infringe copyrights, trademarks, or intellectual
              property rights of third parties.
            </li>
            <li>
              You may not distribute viruses, malware, or any harmful
              technology.
            </li>
          </ul>

          <h2>3. Accounts (If Applicable)</h2>
          <ul>
            <li>You are responsible for keeping your login credentials secure.</li>
            <li>You agree to provide accurate and complete information.</li>
            <li>
              Accounts may be suspended or terminated in case of violations.
            </li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on our website—including text, images, videos, logos,
            and trademarks—is the property of Eternal Ghosts or is used under
            license. You may not copy, reproduce, distribute, or commercially
            use any content without prior written permission.
          </p>

          <h2>5. Disclaimer of Liability</h2>
          <p>
            Our website is provided “as is.” We do not guarantee the accuracy,
            completeness, or timeliness of the content. To the extent permitted
            by law, we are not liable for any damages arising from the use of
            our website.
          </p>

          <h2>6. External Links</h2>
          <p>
            External links may be provided for convenience. We are not
            responsible for the content of third-party websites. Accessing
            external links is at your own risk.
          </p>

          <h2>7. Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will be posted
            on this page. It is your responsibility to review the Terms
            regularly.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to our website
            or services at any time, especially in cases of violations of these
            Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by Swiss law. Where legally permissible,
            the place of jurisdiction is the registered location of Eternal
            Ghosts.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions regarding these Terms of Service or the use of
            our website, please contact us at{" "}
            <a href="mailto:eternal.ghosts@gmx.ch">
              eternal.ghosts@gmx.ch
            </a>
            .
          </p>
        </section>
      </main>
    </NoScrollHorizontal>
  );
}
