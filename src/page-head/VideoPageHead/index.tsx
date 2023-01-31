import BRAND_DATA from "@/src/constants/brand";
import Video from "@/src/models/video";
import { useMemo } from "react";
import CommonHead from "../CommonHead";

const VideoPageHead = ({ video }: { video: Video }) => {
  const data = useMemo(() => {
    const title = `${video.title} | ${BRAND_DATA.NAME}`;
    const description = `${video.title} ${
      BRAND_DATA.NAME
    } ${video.categories.join(
      " "
    )} Phim sex Việt Nam, Trung Quốc miễn phí, cập nhật`;
    const keywords = `${video.categories.join(", ")}, sex, làm tình hóng phốt`;
    return {
      title,
      description,
      keywords,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CommonHead {...data}></CommonHead>;
};

export default VideoPageHead;
