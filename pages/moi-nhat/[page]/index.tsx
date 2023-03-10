import { VIDEO_PER_PAGE } from "@/src/constants/app";
import VIDEOS from "@/src/constants/videos";
import getVideos from "@/src/utils/get-videos";
import { GetStaticPropsContext } from "next";
import MoiNhatPage from "..";

export const getStaticPaths = () => {
  const paths = Array(Math.ceil(VIDEOS.length / VIDEO_PER_PAGE))
    .fill(1)
    .map((_, index) => ({ params: { page: String(index + 1) } }));
  return { paths, fallback: false };
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const page = Number(context.params?.page || "1");
  const videos = getVideos({ type: "moi-nhat", count: 30, page });

  return { props: { videos, page } };
};

export default MoiNhatPage;
