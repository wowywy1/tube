import AdsPlacement from "@/src/components/AdsPlacement";
import VideoList from "@/src/components/VideoList";
import SectionLayout from "@/src/layouts/SectionLayout";
import Video from "@/src/models/video";
import HomePageHead from "@/src/page-head/HomePageHead";
import getVideos from "@/src/utils/get-videos";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { GetStaticPropsContext } from "next";
import React from "react";

export default function HomePage({
  videos,
}: {
  videos: { phoBien: Video[]; moiNhat: Video[]; hayNhat: Video[] };
}) {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <HomePageHead />
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center" }}>
          <AdsPlacement type={upLg ? "728x90" : "320x50"} />
        </Box>
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

export const getStaticProps = (context: GetStaticPropsContext) => {
  const moiNhat = getVideos({ type: "moi-nhat", count: 12 });
  const hayNhat = getVideos({ type: "hay-nhat", count: 12 });
  const phoBien = getVideos({ type: "pho-bien", count: 12 });

  return { props: { videos: { moiNhat, hayNhat, phoBien } } };
};
