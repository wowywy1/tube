import BRAND_DATA from "@/src/constants/brand";
import Head from "next/head";

const CommonHead = ({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={BRAND_DATA.NAME} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={BRAND_DATA.NAME} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={BRAND_DATA.NAME} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default CommonHead;
