// app/terms/page.tsx
import NoScrollHorizontal from "@/components/layout/NoScrollHorizontal"

import termsStyles from "@/styles/terms.module.css";

export const metadata = {
  title: "Eternal Ghosts – Terms of Service",
};

export default function TermsPage() {
  return (
		<NoScrollHorizontal>
			<main className={termsStyles.termsPage}>
				<section className={termsStyles.termsContent}>
					<h1>Terms of Service</h1>
					<p><strong>Letzte Aktualisierung:</strong> 27. November 2025</p>

					<p>Willkommen bei <strong>Eternal Ghosts</strong>! Bitte lese diese Terms of Service („Bedingungen“) sorgfältig durch, bevor du unsere Website oder Dienste nutzt. Mit dem Zugriff auf unsere Inhalte erklärst du dich mit diesen Bedingungen einverstanden.</p>

					<h2>1. Akzeptanz der Bedingungen</h2>
					<p>Durch die Nutzung unserer Website, Social-Media-Präsenzen oder sonstiger digitaler Dienste von Eternal Ghosts akzeptierst du diese Terms of Service. Solltest du nicht einverstanden sein, darfst du unsere Website nicht verwenden.</p>

					<h2>2. Nutzung der Website</h2>
					<ul>
						<li>Nur private, nicht-kommerzielle Nutzung.</li>
						<li>Keine Inhalte, die illegal, diffamierend, obszön oder belästigend sind.</li>
						<li>Keine Inhalte, die Urheberrechte oder Markenrechte Dritter verletzen.</li>
						<li>Keine Verbreitung von Viren, Malware oder schädlicher Software.</li>
					</ul>

					<h2>3. Accounts (falls zutreffend)</h2>
					<ul>
						<li>Verantwortung für die Sicherheit der Zugangsdaten.</li>
						<li>Bereitstellung genauer und vollständiger Informationen.</li>
						<li>Accounts können bei Verstößen gesperrt oder gelöscht werden.</li>
					</ul>

					<h2>4. Geistiges Eigentum</h2>
					<p>Alle Inhalte auf unserer Website, einschließlich Texte, Bilder, Videos, Logos und Marken, sind Eigentum von Eternal Ghosts oder lizenziert. Ohne ausdrückliche schriftliche Zustimmung darfst du diese Inhalte nicht kopieren, verbreiten oder kommerziell nutzen.</p>

					<h2>5. Haftungsausschluss</h2>
					<p>Die Website wird „wie sie ist“ bereitgestellt. Wir übernehmen keine Gewähr für die Vollständigkeit, Richtigkeit oder Aktualität der Inhalte. Wir haften nicht für Schäden, die durch die Nutzung der Website entstehen, soweit gesetzlich zulässig.</p>

					<h2>6. Links zu Dritten</h2>
					<p>Externe Links erfolgen auf eigene Verantwortung. Wir übernehmen keine Verantwortung für Inhalte Dritter.</p>

					<h2>7. Änderungen der Bedingungen</h2>
					<p>Wir können diese Terms jederzeit aktualisieren. Änderungen werden auf dieser Seite veröffentlicht. Es liegt in deiner Verantwortung, die Bedingungen regelmäßig zu prüfen.</p>

					<h2>8. Kündigung</h2>
					<p>Wir behalten uns das Recht vor, den Zugriff auf unsere Website oder Dienste jederzeit zu verweigern, insbesondere bei Verstößen gegen diese Bedingungen.</p>

					<h2>9. Anwendbares Recht</h2>
					<p>Diese Terms unterliegen dem Recht der Schweiz. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von Eternal Ghosts.</p>

					<h2>10. Kontakt</h2>
					<p>Bei Fragen zu diesen Terms of Service oder zur Nutzung unserer Website kontaktiere uns unter <a href="mailto:eternal.ghosts@gmx.ch">eternal.ghosts@gmx.ch</a>.</p>
				</section>
			</main>
		</NoScrollHorizontal>
  );
}
