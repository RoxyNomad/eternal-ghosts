export interface MediaEntity {
  id: number;
  title: string;
  youtubeUrl: string;
  description?: string;
  createdAt: Date;
}

export interface CreateMediaInput {
  title: string;
  youtubeUrl: string;
  description?: string;
}

export function extractYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}