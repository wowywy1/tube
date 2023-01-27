import VideoCard from "@/src/components/VideoCard";
import VIDEOS from "@/src/constants/videos";
import SectionLayout from "@/src/layouts/SectionLayout";
import { Grid } from "@mui/material";
import React, { useMemo } from "react";

export default function HomePage() {
  const videos = useMemo(() => VIDEOS.slice(0, 10), []);

  return (
    <>
      <SectionLayout title="Hay nhất" url="/hay-nhat">
        <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
          {videos.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </SectionLayout>
    </>
  );
}
