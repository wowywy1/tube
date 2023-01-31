import Video from "@/src/models/video";
import { Grid } from "@mui/material";
import VideoCard from "../VideoCard";

const VideoList = ({ videos }: { videos: Video[] }) => {
  return (
    <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
      {videos.map((video, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
