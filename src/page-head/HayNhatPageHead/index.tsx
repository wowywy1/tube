import BRAND_DATA from "@/src/constants/brand";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo } from "react";

const HayNhatPageHead = () => {
  const router = useRouter();
  const data = useMemo(() => {
    const title = `${BRAND_DATA.NAME} | Video mới nhất | Khoe hàng quay lén${
      router.query.page ? " | Trang " + router.query.page : ""
    }`;
    const description = `Tổng hợp video clip show hàng, khoe hàng, hóng phốt, làm tình, quay lén, mới nhất, phim sex Việt Nam, Trung Quốc miễn phí, cập nhật ${
      router.query.page ? "Trang " + router.query.page : ""
    }`;
    const keywords = `sex, show hàng, khoe hàng, làm tình, quay lén, hóng phốt`;
    return {
      title,
      description,
      keywords,
    };
  }, []);

  return (
    <Head>
      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta name="author" content={BRAND_DATA.NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
    </Head>
  );
};

export default HayNhatPageHead;
