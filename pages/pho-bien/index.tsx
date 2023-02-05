import AdsPlacement from "@/src/components/AdsPlacement";
import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import PhoBienPageHead from "@/src/page-head/PhoBienPageHead";
import getVideos from "@/src/utils/get-videos";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { GetStaticPropsContext } from "next/types";

export default function PhoBienPage({
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
      <PhoBienPageHead page={page} />
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <AdsPlacement type={upLg ? "728x90" : "300x50"} />
        </Box>
        <VideoListPage
          title="Video được xem nhiều"
          videos={videos}
          page={Number(page || "1")}
          pageCount={Math.ceil(VIDEOS.length / VIDEO_PER_PAGE)}
          pageRoute="/pho-bien"
        />
      </Container>
    </>
  );
}

export const getStaticProps = (context: GetStaticPropsContext) => {
  const videos = getVideos({ type: "pho-bien", count: 30 });

  return { props: { videos } };
};
