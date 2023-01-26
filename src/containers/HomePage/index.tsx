import VideoCard from "@/src/components/VideoCard";
import SectionLayout from "@/src/layouts/SectionLayout";
import { Grid } from "@mui/material";
import React from "react";

export default function HomePage() {
  return (
    <>
      <SectionLayout title="Hay nhất" url="/hay-nhat">
        <Grid container columnSpacing={2} rowSpacing={4} sx={{ pt: 3 }}>
          {Array(10)
            .fill(1)
            .map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <VideoCard />
              </Grid>
            ))}
        </Grid>
      </SectionLayout>
    </>
  );
}
