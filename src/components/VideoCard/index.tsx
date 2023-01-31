import Video from "@/src/models/video";
import removeAccents from "@/src/utils/remove-accents";
import { Favorite } from "@mui/icons-material";
import { alpha, Box, colors, Typography } from "@mui/material";
import Link from "next/link";
import React, { useMemo } from "react";

export default function VideoCard({ video }: { video: Video }) {
  const url = useMemo(() => {
    return `/video/${removeAccents(video.title)
      .toLowerCase()
      .split(" ")
      .slice(0, 16)
      .join("-")}-${video.id}`;
  }, [video]);

  return (
    <Link href={url}>
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
        <Box className="df aic">
          <Favorite color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2">{video.rating}</Typography>
        </Box>
      </Box>
    </Link>
  );
}
