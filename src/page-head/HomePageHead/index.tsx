import BRAND_DATA from "@/src/constants/brand";
import { useRouter } from "next/router";
import { useMemo } from "react";
import CommonHead from "../CommonHead";

const HomePageHead = () => {
  const router = useRouter();
  const data = useMemo(() => {
    const title = `${BRAND_DATA.NAME} | ${BRAND_DATA.SLOGAN}`;
    const description = `Kho video lớn nhất Việt Name. Tổng hợp video clip show hàng, khoe hàng, hóng phốt, làm tình, quay lén, mới nhất, phim sex Việt Nam, Trung Quốc miễn phí`;
    const keywords = `kho video, show hàng, làm tình, quay lén, phim sex`;
    return {
      title,
      description,
      keywords,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CommonHead {...data} />;
};

export default HomePageHead;
