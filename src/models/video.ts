interface Video {
  title: string;
  id: string | number;
  url?: string;
  duration: string;
  rating?: string;
  categories: string[];
  tags: string[];
  thumb: string;
  filecode?: string;
  views?: number;
  originalTitle?: string;
  translated?: boolean;
  updated_at: number;
}

export default Video;
