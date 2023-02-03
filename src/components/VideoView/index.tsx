import FlexBox from "@/src/common-ui/FlexBox";
import BRAND_DATA from "@/src/constants/brand";
import Video from "@/src/models/video";
import { Box, Button, CircularProgress, colors } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const VideoView = ({ video }: { video: Video }) => {
  const [currentLink, setCurrentLink] = useState(0);
  const [loading, setLoading] = useState(false);

  const links = useMemo(() => {
    let links = [];
    if (video.filecode) {
      links.push(`https://sbhight.com/e/${video.filecode}.html`);
    }
    links.push(`https://85tube.com/embed/${video.id}`);
    return links;
  }, [video]);

  useEffect(() => {
    setLoading(true);
  }, [video, currentLink]);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16/9",
          mt: 2,
          maxWidth: "md",
        }}
      >
        <iframe
          src={links[currentLink]}
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </Box>

      <FlexBox sx={{ mb: 1 }}>
        {links.map((link, index) => (
          <Button
            key={index}
            variant={index == currentLink ? "contained" : "outlined"}
            size="large"
            onClick={() => setCurrentLink(index)}
            sx={{ mr: 1 }}
          >{`Link ${index + 1}`}</Button>
        ))}
        {loading && <CircularProgress sx={{ mt: 2 }} size="large" />}
      </FlexBox>
    </Box>
  );
};

export default VideoView;
