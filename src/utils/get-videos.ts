import { VIDEO_PER_PAGE } from "../constants/app";
import VIDEOS from "../constants/videos";
import Video from "../models/video";
import getVideoMin from "./get-video-min";

const _getCompareNumber = (
  video: Video,
  type: "moi-nhat" | "hay-nhat" | "pho-bien"
): number => {
  return type == "moi-nhat"
    ? video.updated_at
    : type == "pho-bien"
    ? -(video.views || 0)
    : type == "hay-nhat"
    ? -(Number(video.rating?.replace("%", "")) || 0)
    : 0;
};

const getVideos = ({
  type,
  page = 1,
  count = VIDEO_PER_PAGE,
}: {
  type: "moi-nhat" | "hay-nhat" | "pho-bien";
  page?: number;
  count?: number;
}) => {
  const sortedVideos = VIDEOS.sort((a, b) => {
    const aa =
      a.categories?.includes("Nứng - Show hàng") ||
      a.categories?.includes("Quay lén")
        ? 0
        : 1;
    const bb =
      b.categories?.includes("Nứng - Show hàng") ||
      b.categories?.includes("Quay lén")
        ? 0
        : 1;
    if (aa != bb) return aa - bb;
    return _getCompareNumber(a, type) - _getCompareNumber(b, type);
  });
  return sortedVideos
    .slice((page - 1) * count, page * count)
    .map((video) => getVideoMin(video));
};

export default getVideos;
