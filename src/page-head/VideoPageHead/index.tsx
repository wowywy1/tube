import BRAND_DATA from "@/src/constants/brand";
import Video from "@/src/models/video";
import VideoHelper from "@/src/utils/video-helper";
import Head from "next/head";
import { useMemo } from "react";
import CommonHead from "../CommonHead";

const VideoPageHead = ({ video }: { video: Video }) => {
  const data = useMemo(() => {
    const title = `${video.title} | ${BRAND_DATA.NAME}`;
    const description = `${video.title} ${
      BRAND_DATA.NAME
    } ${video.categories?.join(
      " "
    )} Phim sex Việt Nam, Trung Quốc miễn phí, cập nhật`;
    const keywords = `${video.categories?.join(", ")}, sex, làm tình hóng phốt`;
    const image = video.thumb;
    const url = `${BRAND_DATA.DOMAIN}/video/${VideoHelper.getSlug(video)}`;
    const rating = Number(video.rating?.replace("%", "")) / 20;
    const ratingCount = Math.max((video.views || 0) / 100, 1);
    const date = new Date(video.updated_at);
    const uploadDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return {
      title,
      description,
      keywords,
      image,
      url,
      rating,
      ratingCount,
      uploadDate,
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CommonHead {...data}></CommonHead>
      <Head>
        <link rel="canonical" href={data.url} />
        <script
          type="application/ld+json"
          id="organization-script"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "${data.title}",
            "image": "${data.image}",
            "description": "${data.description}",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${data.rating}",
              "ratingCount": "${data.ratingCount}"
            }
          }`,
          }}
        />
        <script
          type="application/ld+json"
          id="organization-script"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "${data.title}",
            "description": "${data.description}",
            "thumbnailUrl": "${data.image}",
            "uploadDate": "${data.uploadDate}"
          }`,
          }}
        />
        <script
          type="application/ld+json"
          id="organization-script"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${data.url}"
              },
              "headline": "${data.title}",
              "description": "${data.description}",
              "image": "${data.image}",  
              "author": {
                "@type": "Person",
                "name": "ClipShow",
                "url": "${BRAND_DATA.DOMAIN}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "ClipShow",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${BRAND_DATA.DOMAIN + BRAND_DATA.LOGO}"
                }
              },
              "datePublished": ""
            }`,
          }}
        />
        <script
          type="application/ld+json"
          id="organization-script"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/", 
              "@type": "BreadcrumbList", 
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "ClipShow",
                "item": "${BRAND_DATA.DOMAIN}"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "video",
                "item": "${BRAND_DATA.DOMAIN}/video"  
              },{
                "@type": "ListItem", 
                "position": 3, 
                "name": "${data.title}",
                "item": "${data.url}"  
              }]
            }`,
          }}
        />
      </Head>
    </>
  );
};

export default VideoPageHead;
