import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import HayNhatPageHead from "@/src/page-head/HayNhatPageHead";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function HayNhatPage() {
  const router = useRouter();

  const videos = useMemo(() => {
    const sortedVideos = VIDEOS.sort(
      (a, b) => a.rating?.localeCompare(b.rating || "") || 0
    );
    const page = Number(router.query.page || "1") - 1;
    return sortedVideos.slice(
      page * VIDEO_PER_PAGE,
      (page + 1) * VIDEO_PER_PAGE
    );
  }, [router.query.page]);

  return (
    <>
      <HayNhatPageHead />
      <Container maxWidth="xl">
        <VideoListPage
          videos={videos}
          page={Number(router.query.page || "1")}
          pageCount={Math.floor(VIDEOS.length / VIDEO_PER_PAGE)}
          title="Video được yêu thích nhất"
        />
      </Container>
    </>
  );
}
