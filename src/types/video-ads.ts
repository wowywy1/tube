import Video from "../models/video";
import Ads from "./ads";

type VideoAds =
  | {
      type: "video";
      video: Video;
    }
  | { type: Ads };

export default VideoAds;
