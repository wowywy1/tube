import { Container } from "@mui/material";
import { useRouter } from "next/router";

const VideoPage = () => {
  const router = useRouter();
  return <Container maxWidth="xl">{router.query.slug}</Container>;
};
export default VideoPage;
