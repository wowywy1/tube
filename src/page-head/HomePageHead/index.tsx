import BRAND_DATA from "@/src/constants/brand";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import CommonHead from "../CommonHead";

const HomePageHead = () => {
  const router = useRouter();

  const getData = useCallback(() => {
    const title = `${BRAND_DATA.NAME} | ${BRAND_DATA.SLOGAN}`;
    const description = `Kho video lớn nhất Việt Name. Tổng hợp video clip show hàng, khoe hàng, hóng phốt, làm tình, quay lén, mới nhất, phim sex Việt Nam, Trung Quốc miễn phí`;
    const keywords = `kho video, show hàng, làm tình, quay lén, phim sex`;
    const image = `${BRAND_DATA.DOMAIN}${BRAND_DATA.LOGO}`;
    return {
      title,
      description,
      keywords,
    };
  }, []);

  const [data, setData] = useState(getData());

  return (
    <>
      <CommonHead {...data} />
      <Head>
        <script
          type="application/ld+json"
          id="organization-script"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClipShow",
  "alternateName": "Clip Show",
  "url": "https://clipshow.fun",
  "logo": "https://clipshow.fun/images/ClipShow.png"
}`,
          }}
        />
      </Head>
    </>
  );
};

export default HomePageHead;
