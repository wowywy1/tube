import VideoList from "@/src/components/VideoList";
import VIDEOS from "@/src/constants/videos";
import SectionLayout from "@/src/layouts/SectionLayout";
import HomePageHead from "@/src/page-head/HomePageHead";
import { Container } from "@mui/system";
import React, { useMemo } from "react";

export default function HomePage() {
  const videos = useMemo(() => {
    const moiNhat = VIDEOS.slice(0, 10);
    const hayNhat = VIDEOS.filter((VIDEO) => VIDEO.rating == "100%").slice(
      0,
      10
    );
    const phoBien = VIDEOS.sort(
      (a, b) => (a.views || 0) - (b.views || 0)
    ).slice(0, 10);
    return { moiNhat, hayNhat, phoBien };
  }, []);

  return (
    <>
      <HomePageHead />
      <Container maxWidth="xl">
        <SectionLayout title="Phổ biến" url="/pho-bien" sx={{ mt: 2 }}>
          <VideoList videos={videos.phoBien} />
        </SectionLayout>
        <SectionLayout title="Mới nhất" url="/moi-nhat">
          <VideoList videos={videos.moiNhat} />
        </SectionLayout>
        <SectionLayout title="Hay nhất" url="/hay-nhat">
          <VideoList videos={videos.hayNhat} />
        </SectionLayout>
      </Container>
    </>
  );
}
