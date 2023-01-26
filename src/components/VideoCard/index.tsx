import { alpha, Box, colors, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function VideoCard() {
  return (
    <Box>
      <Box
        sx={{
          aspectRatio: "16/9",
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src="/images/logo.jpg" alt="" fill />
        <Box
          sx={{
            position: "absolute",
            bottom: 4,
            right: 4,
            borderRadius: 1,
            px: 0.5,
            background: alpha(colors.grey[900], 0.7),
          }}
        >
          <Typography variant="caption" lineHeight={0}>
            4:32
          </Typography>
        </Box>
      </Box>
      <Typography className="sb" variant="h6">
        af asdf asfd{" "}
      </Typography>
      <Typography variant="body2">1.2M views • 3 days ago</Typography>
    </Box>
  );
}
