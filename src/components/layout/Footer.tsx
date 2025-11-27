// src/components/layout/footer.tsx
import Link from "next/link";

import footerStyles from "@/styles/footer.module.css";

export default function Footer() {
	return(
		<div className={footerStyles.footerContainer}>
			<p className={footerStyles.footerContent}>
				© 2023 Eternal Ghosts, All Rights Reserved.<br /> 
				<Link 
					href="/terms" 
					className={footerStyles.footerLink}
					target='_blank'
					rel='noopener noreferrer'	
				>Terms of Service</Link> |&nbsp;
				<Link 
					href="/privacy" 
					className={footerStyles.footerLink}
					target='_blank'
					rel='noopener noreferrer'	
				>Privacy Policy</Link>
			</p>
		</div>
	);
}