import NoSSRWrapper from "@/src/common-ui/NoSSRWrapper";
import Ads from "@/src/types/ads";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const AdsPlacement = ({ type }: { type: Ads }) => {
  const router = useRouter();
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const a = document.createElement("script");
    a.async = true;
    a.type = "text/javascript";
    a.setAttribute("data-cfasync", "false");
    a.src = "https://poweredby.jads.co/js/jads.js";

    const sc = document.createElement("script");
    sc.async = true;
    sc.type = "text/javascript";
    sc.setAttribute("data-cfasync", "false");
    sc.innerHTML = `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':${ref.current.id}});`;

    ref.current.parentNode?.insertBefore(sc, ref.current.nextSibling);
    ref.current.parentNode?.insertBefore(a, ref.current);
  }, [key]);

  useEffect(() => {
    setKey(new Date().getTime());
  }, [router.asPath]);

  return (
    <NoSSRWrapper>
      <Box key={key}>
        {type == "300x250" ? (
          <ins
            ref={ref}
            className="juicyads-script"
            id="1010890"
            data-width="300"
            data-height="262"
          ></ins>
        ) : type == "320x50" ? (
          <ins
            ref={ref}
            className="juicyads-script"
            id="1010907"
            data-width="300"
            data-height="62"
          ></ins>
        ) : type == "250x250" ? (
          <ins
            ref={ref}
            className="juicyads-script"
            id="1010909"
            data-width="250"
            data-height="262"
          ></ins>
        ) : type == "728x90" ? (
          <ins
            ref={ref}
            className="juicyads-script"
            id="1010908"
            data-width="728"
            data-height="102"
          ></ins>
        ) : null}
      </Box>
    </NoSSRWrapper>
  );
};

export default AdsPlacement;
