import Video from "../models/video";

const getVideoMin = (video: Video) => ({
  id: video.id,
  title: video.title,
  duration: video.duration,
  thumb: video.thumb,
  rating: video.rating || "",
});

export default getVideoMin;
