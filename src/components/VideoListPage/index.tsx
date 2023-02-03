import Pagination from "@/src/common-ui/Pagination";
import Video from "@/src/models/video";
import { Typography } from "@mui/material";
import VideoList from "../VideoList";

const VideoListPage = ({
  videos,
  page,
  pageCount,
  title,
  pageRoute,
  onPageChange,
}: {
  videos: Video[];
  page: number;
  pageCount: number;
  title: string;
  pageRoute?: string;
  onPageChange?: (page: number) => void;
}) => {
  return (
    <>
      <Typography className="sb" variant="h5" component="h1">
        {title}
      </Typography>
      <Pagination
        count={pageCount}
        page={page}
        pageRoute={pageRoute}
        onChange={(event, page) => onPageChange?.(page)}
      />
      <VideoList videos={videos} />
      <Pagination
        count={pageCount}
        page={page}
        pageRoute={pageRoute}
        sx={{ mt: 2 }}
        onChange={(event, page) => onPageChange?.(page)}
      />
    </>
  );
};

export default VideoListPage;
