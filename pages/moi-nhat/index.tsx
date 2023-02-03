import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import MoiNhatPageHead from "@/src/page-head/MoiNhatPageHead";
import getVideos from "@/src/utils/get-videos";
import { Container } from "@mui/material";
import { GetStaticPropsContext } from "next";
import router, { useRouter } from "next/router";
import { useMemo } from "react";

export default function MoiNhatPage({
  videos,
  page,
}: {
  videos: Video[];
  page: number;
}) {
  return (
    <>
      <MoiNhatPageHead page={page} />
      <Container maxWidth="xl">
        <VideoListPage
          videos={videos}
          page={Number(page || "1")}
          pageCount={Math.floor(VIDEOS.length / VIDEO_PER_PAGE)}
          title="Video cập nhật mới nhất"
        />
      </Container>
    </>
  );
}

export const getStaticProps = (context: GetStaticPropsContext) => {
  const videos = getVideos({ type: "moi-nhat", count: 30 });
  return { props: { videos } };
};
