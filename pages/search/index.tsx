import VideoListPage from "@/src/components/VideoListPage";
import { VIDEO_PER_PAGE } from "@/src/constants/app";
import Video from "@/src/models/video";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { event } from "@/src/lib/ga";
import Head from "next/head";
import request from "@/src/utils/request";

const SearchPage = () => {
  const router = useRouter();

  const [{ videos, count }, setData] = useState<{
    videos: Video[];
    count: number;
  }>({
    videos: [],
    count: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = useCallback(async (params: any) => {
    setLoading(true);
    setError(false);
    try {
      const response = await request(`https://search.clipshow.fun`, {
        params,
      });
      if (response.status == 200) {
        setData(response.result);
        event({ action: "search", params: { query: router.query.q } });
      } else {
        throw "Search API return error";
      }
    } catch (error) {
      setError(true);
      event({ action: "search_error", params: { query: router.query, error } });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window != "undefined") {
      handleSearch(router.query);
    }
  }, [router.query.q, router.query.page]);

  return (
    <>
      <Head>
        <title>{`"${router.query.q}" Tìm kiếm với ClipShow`}</title>
      </Head>
      <Container>
        {error ? (
          <Typography
            variant="h5"
            color="error"
            sx={{ textAlign: "center", mt: 4 }}
          >
            Có lỗi xảy ra!
          </Typography>
        ) : (
          <VideoListPage
            title={
              router.query.q
                ? `Kết quả tìm kiếm cho "${router.query.q}"`
                : "Hãy nhập nội dung vào ô tìm kiếm nhé"
            }
            videos={videos || []}
            page={Number(router.query.page || "1")}
            pageCount={Math.ceil(count / VIDEO_PER_PAGE)}
            onPageChange={(page) =>
              router.push({ query: { ...router.query, page } })
            }
          />
        )}
      </Container>
    </>
  );
};

export default SearchPage;
