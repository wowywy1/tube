import BRAND_DATA from "@/src/constants/brand";
import { useMemo } from "react";
import CommonHead from "../CommonHead";

const PhoBienPageHead = ({ page }: { page?: number }) => {
  const data = useMemo(() => {
    const title = `${BRAND_DATA.NAME} | Video phổ biến | Khoe hàng quay lén${
      page ? " | Trang " + page : ""
    }`;
    const description = `Tổng hợp video clip show hàng, khoe hàng, hóng phốt, làm tình, quay lén, mới nhất, phim sex Việt Nam, Trung Quốc miễn phí, được xem nhiều ${
      page ? "Trang " + page : ""
    }`;
    const keywords = `sex, show hàng, khoe hàng, làm tình, quay lén, hóng phốt, phổ biến`;
    return {
      title,
      description,
      keywords,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CommonHead {...data} />;
};

export default PhoBienPageHead;
