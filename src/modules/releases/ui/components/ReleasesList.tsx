// src/modules/releases/ui/components/ReleasesList.tsx
import React from "react";
import Image from "next/image";
import { ReleaseCardReadModel } from "../../application/read-models/release-card.read-model";

import styles from "@/ui/styles/components/ReleasesList.module.scss";

interface ReleasesListProps {
  releases: ReleaseCardReadModel[];
}

export default function ReleasesList({ releases }: ReleasesListProps) {
  return (
    <div className={styles.releasesContainer}>
      <div className={styles.releasesContent}>
        <h2 className={styles.containerTitle}>Discography</h2>
        
        {releases.length === 0 ? (
          <p className={styles.noReleases}>
            No releases available at the moment. Please check back later for updates!
          </p>
        ) : (
          <div className={styles.grid}>
            {releases.map((release) => (
              <div key={release.id} className={styles.releaseCard}>
                
                <div className={styles.coverWrapper}>
                  <Image
                    src={release.coverUrl}
                    alt={`${release.title} Cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </div>

                <div className={styles.infoContainer}>
                  <span className={styles.type}>{release.type}</span>
                  <h3 className={styles.title}>{release.title}</h3>
                  {release.description && (
                    <p className={styles.description}>{release.description}</p>
                  )}
                  <span className={styles.date}>{release.formattedDate}</span>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
