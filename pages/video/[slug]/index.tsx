import VideoList from "@/src/components/VideoList";
import VideoView from "@/src/components/VideoView";
import BRAND_DATA from "@/src/constants/brand";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import VideoPageHead from "@/src/page-head/VideoPageHead";
import VideoHelper from "@/src/utils/video-helper";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSidePropsContext } from "next";

const VideoPage = ({ video, related }: { video: Video; related: Video[] }) => {
  return (
    <>
      <VideoPageHead video={video} />
      <Container maxWidth="xl">
        <Box maxWidth="md">
          <Typography className="sb" variant="h5" component="h1">
            {video.title}
          </Typography>
          <VideoView video={video} />
          <Typography>{`${video.title} ${
            BRAND_DATA.NAME
          } ${video.categories.join(
            " "
          )}  Phim sex Việt Nam, Trung Quốc miễn phí, cập nhật`}</Typography>
          <Typography variant="body2">{`${video.categories.join(
            ", "
          )}, sex, làm tình hóng phốt`}</Typography>
        </Box>
        <Typography className="sb" variant="h6" component="h2" sx={{ mt: 3 }}>
          Video liên quan
        </Typography>
        <VideoList videos={related || []} />
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = VIDEOS.map((video) => ({
    params: { slug: VideoHelper.getSlug(video) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = (context: GetServerSidePropsContext) => {
  const slug = context.params?.slug || "";
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
