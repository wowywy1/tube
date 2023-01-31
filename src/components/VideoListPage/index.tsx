import NoSSRWrapper from "@/src/common-ui/NoSSRWrapper";
import Pagination from "@/src/common-ui/Pagination";
import Video from "@/src/models/video";
import { Typography } from "@mui/material";
import VideoList from "../VideoList";

const VideoListPage = ({
  videos,
  page,
  pageCount,
  title,
}: {
  videos: Video[];
  page: number;
  pageCount: number;
  title: string;
}) => {
  return (
    <>
      <Typography className="sb" variant="h5" component="h1">
        {title}
      </Typography>
      <Pagination count={pageCount} page={page} pageRoute="/hay-nhat" />
      <VideoList videos={videos} />
      <Pagination
        count={pageCount}
        page={page}
        pageRoute="/hay-nhat"
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default VideoListPage;
