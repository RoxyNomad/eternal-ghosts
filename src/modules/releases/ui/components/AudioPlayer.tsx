interface AudioPlayerProps {
  src: string;
  title: string;
}

export const AudioPlayer = ({ src, title }: AudioPlayerProps) => {
  return (
    <div className="audio-player">
      <p className="font-semibold mb-2">Track: {title}</p>
      <audio controls src={src} className="w-full">
        Ihr Browser unterstützt das Audio-Element nicht.
      </audio>
    </div>
  );
};