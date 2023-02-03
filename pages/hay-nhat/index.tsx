import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import HayNhatPageHead from "@/src/page-head/HayNhatPageHead";
import getVideos from "@/src/utils/get-videos";
import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";

export default function HayNhatPage({
  videos,
  page,
}: {
  videos: Video[];
  page: number;
}) {
  return (
    <>
      <HayNhatPageHead page={page} />
      <Container maxWidth="xl">
        <VideoListPage
          videos={videos}
          page={Number(page || "1")}
          pageCount={Math.floor(VIDEOS.length / VIDEO_PER_PAGE)}
          title="Video được yêu thích nhất"
        />
      </Container>
    </>
  );
}

export const getStaticProps = (context: GetStaticPropsContext) => {
  const videos = getVideos({ type: "hay-nhat", count: 30 });
  return { props: { videos } };
};
