import Video from "@/src/models/video";
import { Favorite } from "@mui/icons-material";
import { alpha, Box, colors, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Box sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          aspectRatio: "16/9",
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url("${video.thumb}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
        }}
      >
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
            {video.duration}
          </Typography>
        </Box>
      </Box>
      <Typography className="sb" variant="h6">
        {video.title}
      </Typography>
      {/* <Typography variant="body2">1.2M views • 3 days ago</Typography> */}
      <Box className="df aic">
        <Favorite color="primary" sx={{ mr: 1 }} />
        <Typography variant="body2">{video.rating}</Typography>
      </Box>
    </Box>
  );
}
