import { alpha, Box, colors, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function VideoCard() {
  return (
    <Box>
      <Box sx={{ aspectRatio: "16/9", borderRadius: 2, position: "relative" }}>
        <Image src="/images/logo.jpg" alt="" fill />
        <Box
          sx={{
            borderRadius: 0.5,
            padding: 0.5,
            background: alpha(colors.grey[900], 0.5),
          }}
        >
          <Typography variant="caption">4:32</Typography>
        </Box>
      </Box>
      <Typography variant="h5">af asdf asfd </Typography>
      <Typography variant="body2">1.2M views • 3 days ago</Typography>
    </Box>
  );
}
