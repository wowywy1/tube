import { VIDEO_PER_PAGE } from "../constants/app";
import VIDEOS from "../constants/videos";
import Video from "../models/video";

const _getMatchValue = (video: Video, keys: string[]) => {
  let result = 1;
  const titles = video.title.toLowerCase().split(" ");
  for (const key of keys) {
    if (titles.includes(key)) {
      result *= 2;
    }
  }
  return result;
};

const searchVideo = ({
  query,
  category,
  page = 1,
}: {
  query: string;
  category?: string;
  page?: number;
}): { videos: Video[]; count: number } => {
  if (query == "") return { videos: [], count: 0 };
  const keys = query.trim().toLowerCase().split(" ");
  const filteredVideos = category
    ? VIDEOS.filter((video) => video.categories?.includes(category))
    : VIDEOS;
  const sortedVideos = filteredVideos.sort(
    (a, b) => _getMatchValue(b, keys) - _getMatchValue(a, keys)
  );
  const index = sortedVideos.findIndex(
    (video) => _getMatchValue(video, keys) == 1
  );
  const searchedVideos = sortedVideos.slice(0, index);
  const videos = searchedVideos.slice(
    (page - 1) * VIDEO_PER_PAGE,
    page * VIDEO_PER_PAGE
  );
  return { videos, count: searchedVideos.length };
};

export default searchVideo;
