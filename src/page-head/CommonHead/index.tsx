import BRAND_DATA from "@/src/constants/brand";
import Head from "next/head";

const CommonHead = ({
  title,
  description,
  keywords,
}: {
  title: string;
  description: string;
  keywords: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={BRAND_DATA.NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Vietnamese" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default CommonHead;
