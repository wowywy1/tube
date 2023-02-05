import NoSSRWrapper from "@/src/common-ui/NoSSRWrapper";
import Ads from "@/src/types/ads";
import Script from "next/script";

const AdsPlacement = ({ type }: { type: Ads }) => {
  return (
    <>
      {type == "300x250" ? (
        <>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `atOptions = {
              'key' : '4e27468fbdd160a93571c71c7264b82b',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://absentlygratefulcamomile.com/4e27468fbdd160a93571c71c7264b82b/invoke.js"></scr' + 'ipt>');`,
            }}
          ></script>
          <Script
            async
            src={
              typeof window != "undefined"
                ? `http${
                    window.location.protocol === "https:" ? "s" : ""
                  }://absentlygratefulcamomile.com/4e27468fbdd160a93571c71c7264b82b/invoke.js`
                : undefined
            }
          />
        </>
      ) : type == "320x50" ? (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `atOptions = {
              'key' : '4f8ffe103847abc70ea1e82da1f0f600',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://absentlygratefulcamomile.com/4f8ffe103847abc70ea1e82da1f0f600/invoke.js"></scr' + 'ipt>');`,
          }}
        ></script>
      ) : type == "728x90" ? (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `atOptions = {
              'key' : 'cafe73dff58ba6aa263a90d13ab6038c',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://absentlygratefulcamomile.com/cafe73dff58ba6aa263a90d13ab6038c/invoke.js"></scr' + 'ipt>');`,
          }}
        ></script>
      ) : null}
    </>
  );
};

export default AdsPlacement;
