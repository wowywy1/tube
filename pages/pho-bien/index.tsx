import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import PhoBienPageHead from "@/src/page-head/PhoBienPageHead";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function PhoBienPage() {
  const router = useRouter();

  const videos = useMemo(() => {
    const sortedVideos = VIDEOS.sort((a, b) => (a.views || 0) - (b.views || 0));
    const page = Number(router.query.page || "1") - 1;
    return sortedVideos.slice(
      page * VIDEO_PER_PAGE,
      (page + 1) * VIDEO_PER_PAGE
    );
  }, [router.query.page]);

  return (
    <>
      <PhoBienPageHead />
      <Container maxWidth="xl">
        <VideoListPage
          videos={videos}
          page={Number(router.query.page || "1")}
          pageCount={Math.floor(VIDEOS.length / VIDEO_PER_PAGE)}
          title="Video được xem nhiều"
        />
      </Container>
    </>
  );
}
