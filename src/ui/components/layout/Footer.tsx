// src/ui/components/layout/footer.tsx
import Link from "next/link";

import styles from "@/ui/styles/components/Footer.module.scss";

export default function Footer() {
	return(
		<div className={styles.footerContainer}>
			<p className={styles.footerContent}>
				© 2023 Eternal Ghosts, All Rights Reserved.<br /> 
				<Link 
					href="/terms" 
					className={styles.footerLink}
					target='_blank'
					rel='noopener noreferrer'	
				>Terms of Service</Link> |&nbsp;
				<Link 
					href="/privacy" 
					className={styles.footerLink}
					target='_blank'
					rel='noopener noreferrer'	
				>Privacy Policy</Link>
			</p>
		</div>
	);
}