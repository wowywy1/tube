import Video from "../models/video";
import removeAccents from "./remove-accents";

class VideoHelper {
  static getSlug = (video: Video) => {
    return `${removeAccents(video.title)
      .toLowerCase()
      .split(" ")
      .slice(0, 16)
      .join("-")}-${video.id}`;
  };
}

export default VideoHelper;
