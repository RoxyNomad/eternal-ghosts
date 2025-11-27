// app/privacy/page.tsx
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal";

import styles from "@/styles/terms.module.css";

export const metadata = {
  title: "Privacy Policy – Eternal Ghosts",
  description: "Privacy Policy of Eternal Ghosts",
};

export default function PrivacyPage() {
  return (
		<NoScrollHorizontal>
      <main className={styles.termsPage}>
				<section className={styles.termsContent}>
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> February 2025</p>

        <h2>1. Responsible Entity</h2>
        <p>
          Eternal Ghosts<br />
          Industriestrasse 7<br />
					CH-5432 Neuenhof<br />
					Switzerland<br />
          Email: eternal-ghosts@gmx.ch
        </p>

        <h2>2. Collection and Processing of Personal Data</h2>
        <p>
          We only process personal data if necessary to provide a functional
          website, our content, or requested services.
        </p>

        <h3>2.1 Server Log Files</h3>
        <p>
          When visiting this site, the following technical data is recorded
          automatically:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referrer URL</li>
          <li>Host name of the accessing device</li>
          <li>Time of server request</li>
          <li>IP address (anonymized)</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          Our website may use cookies for functionality, performance
          optimization, or security. You can disable cookies in your browser
          settings at any time.
        </p>

        <h2>4. Third-Party Services</h2>

        <h3>4.1 Cloudinary</h3>
        <p>
          We use Cloudinary for image hosting. Technical data such as your
          IP address may be transferred to Cloudinary.  
          Privacy Policy: cloudinary.com/privacy
        </p>

        <h3>4.2 Social Media Links</h3>
        <p>
          We include static links to Facebook, YouTube, and Instagram.
          No data is transmitted until you actively click a link.
        </p>

        <h3>4.3 YouTube Embeds (if used)</h3>
        <p>
          When embedding videos, YouTube may process user data and set cookies.
          We recommend using the privacy-enhanced mode (“youtube-nocookie”).
        </p>

        <h2>5. Contact Form / Email Contact</h2>
        <p>
          If you contact us, we process the following data:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Message content</li>
        </ul>
        <p>
          This data is only used to respond to your inquiry.
        </p>

        <h2>6. Storage and Deletion</h2>
        <p>
          Personal data is stored only as long as necessary to fulfill its
          purpose or for legal retention periods.
        </p>

        <h2>7. Your Rights</h2>
        <p>You may request at any time:</p>
        <ul>
          <li>Access to your stored data</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
        </ul>

        <p>
          Contact us via email to exercise these rights.
        </p>

        <h2>8. Data Security</h2>
        <p>
          We use SSL/TLS encryption to protect your data during transmission.
        </p>

        <h2>9. Updates</h2>
        <p>
          We may update this Privacy Policy if needed.  
          The latest version will always be available on this page.
        </p>

        <h2>10. Contact</h2>
        <p>
          For any privacy questions, contact us at:<br />
          eternal-ghosts@gmx.ch
        </p>
				</section>
      </main>
		</NoScrollHorizontal>
  );
}
