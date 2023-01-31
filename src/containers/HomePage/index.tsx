import VideoCard from "@/src/components/VideoCard";
import VIDEOS from "@/src/constants/videos";
import SectionLayout from "@/src/layouts/SectionLayout";
import { Grid } from "@mui/material";
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
      <SectionLayout title="Phổ biến" url="/pho-bien">
        <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
          {videos.phoBien.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </SectionLayout>
      <SectionLayout title="Mới nhất" url="/moi-nhat">
        <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
          {videos.moiNhat.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </SectionLayout>
      <SectionLayout title="Hay nhất" url="/hay-nhat">
        <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
          {videos.hayNhat.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
}
