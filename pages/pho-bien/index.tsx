import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import PhoBienPageHead from "@/src/page-head/PhoBienPageHead";
import getVideos from "@/src/utils/get-videos";
import { Container } from "@mui/material";
import router from "next/router";
import { GetStaticPropsContext } from "next/types";

export default function PhoBienPage({
  videos,
  page,
}: {
  videos: Video[];
  page: number;
}) {
  return (
    <>
      <PhoBienPageHead page={page} />
      <Container maxWidth="xl">
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
