import ButtonLink from "@/src/common-ui/ButtonLink";
import FlexBox from "@/src/common-ui/FlexBox";
import { ArrowRightRounded } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export default function SectionLayout({
  children,
  title,
  url,
  ...BoxProps
}: {
  children: ReactNode;
  title: string;
  url?: string;
} & BoxProps) {
  return (
    <Box {...BoxProps} sx={{ mb: 5 }}>
      <FlexBox
        sx={{ justifyContent: { xs: "space-between", sm: "flex-start" } }}
      >
        <Typography className="sb" variant="h2" sx={{ fontSize: 28 }}>
          {title}
        </Typography>
        {url && (
          <ButtonLink href={url} color="info" sx={{ ml: 6 }}>
            <Typography variant="subtitle1">Xem thêm</Typography>
            <ArrowRightRounded sx={{ ml: 1 }} />
          </ButtonLink>
        )}
      </FlexBox>
      <Box>{children}</Box>
    </Box>
  );
}
