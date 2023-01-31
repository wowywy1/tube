import VideoList from "@/src/components/VideoList";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import VideoPageHead from "@/src/page-head/VideoPageHead";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSidePropsContext } from "next";

const VideoPage = ({ video, related }: { video: Video; related: Video[] }) => {
  return (
    <>
      <VideoPageHead video={video} />
      <Container maxWidth="xl">
        <Typography className="sb" variant="h5" component="h1">
          {video.title}
        </Typography>
        <Box sx={{ width: "100%", aspectRatio: "16/9", mt: 2, maxWidth: "md" }}>
          <iframe
            src={`https://85tube.com/embed/${video.id}`}
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
        <Typography className="sb" variant="h6" component="h2" sx={{ mt: 3 }}>
          Video liên quan
        </Typography>
        <VideoList videos={related || []} />
      </Container>
    </>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const slug = context.query.slug || "";
  if (!slug || slug.indexOf("-") == -1) return;
  const videoId = Number(slug.slice(slug.lastIndexOf("-") + 1));
  const index = VIDEOS.findIndex((video) => video.id == videoId);
  if (index == -1) return;

  const video = VIDEOS[index];
  const related = VIDEOS.slice(Math.max(0, index - 10), index + 11).filter(
    (video) => video.id != videoId
  );
  return { props: { video, related } };
};

export default VideoPage;
