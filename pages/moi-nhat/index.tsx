import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import MoiNhatPageHead from "@/src/page-head/MoiNhatPageHead";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function MoiNhatPage() {
  const router = useRouter();

  const videos = useMemo(() => {
    const page = Number(router.query.page || "1") - 1;
    return VIDEOS.slice(page * VIDEO_PER_PAGE, (page + 1) * VIDEO_PER_PAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <>
      <MoiNhatPageHead />
      <Container maxWidth="xl">
        <VideoListPage
          videos={videos}
          page={Number(router.query.page || "1")}
          pageCount={Math.floor(VIDEOS.length / VIDEO_PER_PAGE)}
          title="Video cập nhật mới nhất"
        />
      </Container>
    </>
  );
}
