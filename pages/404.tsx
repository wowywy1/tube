import { Container, Typography } from "@mui/material";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Container sx={{ textAlign: "center", py: 10 }}>
        <Typography className="sb" variant="h1">
          404
        </Typography>
        <Typography className="sb" variant="h4">
          Trang này éo tồn tại
        </Typography>
      </Container>
    </>
  );
};

export default NotFoundPage;
