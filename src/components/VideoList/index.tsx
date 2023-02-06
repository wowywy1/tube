import Video from "@/src/models/video";
import VideoAds from "@/src/types/video-ads";
import { Grid } from "@mui/material";
import { useMemo } from "react";
import AdsPlacement from "../AdsPlacement";
import VideoCard from "../VideoCard";

const VideoList = ({ videos }: { videos: Video[] }) => {
  const videosWithAds = useMemo((): VideoAds[] => {
    const videosWithAds: VideoAds[] = videos.map((video) => ({
      type: "video",
      video,
    }));
    videosWithAds.splice(1, 0, { type: "300x250" });
    if (videosWithAds.length > 12)
      videosWithAds.splice(12, 0, { type: "250x250" });
    return videosWithAds;
  }, [videos]);

  return (
    <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
      {videosWithAds.map((data, index) => (
        <Grid
          item
          key={(data.type && data.type == "video" && data.video.id) || index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          {data.type == "video" ? (
            <VideoCard video={data.video} />
          ) : (
            <AdsPlacement type={data.type} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
