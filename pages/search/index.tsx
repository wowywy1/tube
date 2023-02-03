import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import Video from "@/src/models/video";
import searchVideo from "@/src/utils/search-videos";
import { Container } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { event } from "@/src/lib/ga";
import Head from "next/head";

const SearchPage = ({ videos, count }: { videos: Video[]; count: number }) => {
  const router = useRouter();

  useEffect(() => {
    event({ action: "search", params: { query: router.query.q } });
  }, [router.query.q]);

  return (
    <>
      <Head>
        <title>{`"${router.query.q}" Tìm kiếm với ClipShow`}</title>
      </Head>
      <Container>
        <VideoListPage
          title={
            router.query.q
              ? `Kết quả tìm kiếm cho "${router.query.q}"`
              : "Hãy nhập nội dung vào ô tìm kiếm nhé"
          }
          videos={videos}
          page={Number(router.query.page || "1")}
          pageCount={Math.ceil(count / VIDEO_PER_PAGE)}
          onPageChange={(page) =>
            router.push({ query: { ...router.query, page } })
          }
        />
      </Container>
    </>
  );
};

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate"
  );
  const { videos, count } = searchVideo({
    query: context.query.q?.toString() || "",
    page: Number(context.query.page || "1"),
  });
  return { props: { videos, count } };
};

export default SearchPage;
