"use client";

import YouTubePlayer from "./YouTubePlayer";
import { usePublicMedia } from "../hooks/usePublicMedia";
import styles from "@/ui/styles/components/MediaView.module.scss";

export default function MediaView() {
  const { mediaItems, loading, error } = usePublicMedia();

  return (     
		<div className={styles.mediaContainer}>
			<div className={styles.mediaContent}>
				{loading && <p className={styles.noMedia}>Videos werden geladen...</p>}
				{error && <p className={styles.noMedia}>Fehler: {error}</p>}

				{!loading && mediaItems.length === 0 && (
					<p className={styles.noMedia}>Keine Videos verfügbar.</p>
				)}

				{!loading && mediaItems.length > 0 && (
					<div className={styles.grid}>
						{mediaItems.map((video) => (
							<article key={video.id} className={styles.mediaCard}>
								<div className={styles.playerWrapper}>
									<YouTubePlayer
										youtubeUrl={video.youtubeUrl}
										title={video.title}
									/>
								</div>
								<div className={styles.infoContainer}>
									<h2 className={styles.title}>{video.title}</h2>
									{video.description && (
										<p className={styles.description}>{video.description}</p>
									)}
								</div>
							</article>
						))}
					</div>
				)}
			</div>
		</div>		
  );
}