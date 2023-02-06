import AdsPlacement from "@/src/components/AdsPlacement";
import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import HayNhatPageHead from "@/src/page-head/HayNhatPageHead";
import getVideos from "@/src/utils/get-videos";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticPropsContext } from "next";

export default function HayNhatPage({
  videos,
  page,
}: {
  videos: Video[];
  page: number;
}) {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <HayNhatPageHead page={page} />
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <AdsPlacement type={upLg ? "728x90" : "300x50"} />
        </Box>
        <VideoListPage
          title="Video được yêu thích nhất"
          videos={videos}
          page={Number(page || "1")}
          pageCount={Math.ceil(VIDEOS.length / VIDEO_PER_PAGE)}
          pageRoute="/hay-nhat"
        />
      </Container>
    </>
  );
}

export const getStaticProps = (context: GetStaticPropsContext) => {
  const videos = getVideos({ type: "hay-nhat", count: 30 });
  return { props: { videos } };
};
