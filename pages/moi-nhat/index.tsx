import AdsPlacement from "@/src/components/AdsPlacement";
import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import MoiNhatPageHead from "@/src/page-head/MoiNhatPageHead";
import getVideos from "@/src/utils/get-videos";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticPropsContext } from "next";

export default function MoiNhatPage({
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
      <MoiNhatPageHead page={page} />
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <AdsPlacement type={upLg ? "728x90" : "300x50"} />
        </Box>
        <VideoListPage
          title="Video cập nhật mới nhất"
          videos={videos}
          page={Number(page || "1")}
          pageCount={Math.ceil(VIDEOS.length / VIDEO_PER_PAGE)}
          pageRoute="/moi-nhat"
        />
      </Container>
    </>
  );
}

export const getStaticProps = (context: GetStaticPropsContext) => {
  const videos = getVideos({ type: "moi-nhat", count: 30 });
  return { props: { videos } };
};
