import FlexBox from "@/src/common-ui/FlexBox";
import AdsPlacement from "@/src/components/AdsPlacement";
import VideoList from "@/src/components/VideoList";
import VideoView from "@/src/components/VideoView";
import BRAND_DATA from "@/src/constants/brand";
import VIDEOS from "@/src/constants/videos";
import Video from "@/src/models/video";
import VideoPageHead from "@/src/page-head/VideoPageHead";
import getVideoMin from "@/src/utils/get-video-min";
import VideoHelper from "@/src/utils/video-helper";
import { Favorite } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GetServerSidePropsContext } from "next";

const VideoPage = ({ video, related }: { video: Video; related: Video[] }) => {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <VideoPageHead video={video} />
      <Container maxWidth="xl">
        <FlexBox sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box maxWidth="md">
            <VideoView video={video} sx={{ flex: 1 }} />

            <FlexBox sx={{ mb: 2 }}>
              <Typography
                className="sb"
                variant="h5"
                component="h1"
                sx={{ flex: 1 }}
              >
                {video.title}
              </Typography>
              <Box className="df aic">
                <Favorite color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">{video.rating}</Typography>
              </Box>
            </FlexBox>

            <Typography>{`${video.title} ${
              BRAND_DATA.NAME
            } ${video.categories?.join(
              " "
            )}  Phim sex Việt Nam, Trung Quốc miễn phí, cập nhật`}</Typography>
            <Typography variant="body2">{`${video.categories?.join(
              ", "
            )}, sex, làm tình hóng phốt`}</Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <AdsPlacement type="300x100" />
            {upMd && <AdsPlacement type="300x250" />}
          </Box>
        </FlexBox>
        <Divider sx={{ mt: 4 }} />
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
  const related = VIDEOS.slice(Math.max(0, index - 10), index + 11)
    .filter((video) => video.id != videoId)
    .map((video) => getVideoMin(video));
  return { props: { video, related } };
};

export default VideoPage;
