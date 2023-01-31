import BRAND_DATA from "@/src/constants/brand";
import { useRouter } from "next/router";
import { useMemo } from "react";
import CommonHead from "../CommonHead";

const HayNhatPageHead = () => {
  const router = useRouter();
  const data = useMemo(() => {
    const title = `${BRAND_DATA.NAME} | Video hay nhất | Khoe hàng quay lén${
      router.query.page ? " | Trang " + router.query.page : ""
    }`;
    const description = `Tổng hợp video clip show hàng, khoe hàng, hóng phốt, làm tình, quay lén, hay nhất, phim sex Việt Nam, Trung Quốc miễn phí, cực hay ${
      router.query.page ? "Trang " + router.query.page : ""
    }`;
    const keywords = `sex, show hàng, khoe hàng, làm tình, quay lén, hóng phốt, hay nhất`;
    return {
      title,
      description,
      keywords,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CommonHead {...data} />;
};

export default HayNhatPageHead;
