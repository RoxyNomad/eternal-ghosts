"use client";

import { extractYouTubeId } from "../../domain/media.entity";

interface Props {
  youtubeUrl: string;
  title: string;
}

export default function YouTubePlayer({ youtubeUrl, title }: Props) {
  const videoId = extractYouTubeId(youtubeUrl);

  if (!videoId) {
    return <p>Ungültiges Video</p>;
  }

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px" }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}