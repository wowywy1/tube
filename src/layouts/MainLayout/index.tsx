import ButtonLink from "@/src/common-ui/ButtonLink";
import FlexBox from "@/src/common-ui/FlexBox";
import TextField from "@/src/common-ui/TextField";
import BRAND_DATA from "@/src/constants/brand";
import { Search, HomeRounded } from "@mui/icons-material";
import { AppBar, Box, colors, Typography } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar position="static">
        <FlexBox sx={{ px: 2 }}>
          <h1>
            <Link href="/">
              <img
                src="/images/logo.jpg"
                alt={BRAND_DATA.SLOGAN}
                height={"80px"}
              />
            </Link>
          </h1>
          <TextField
            sx={{ flex: 1, ml: 2 }}
            icon={<Search />}
            placeholder="Tìm kiếm"
          />
        </FlexBox>
        <FlexBox sx={{ display: "flex" }} component="nav">
          {[
            { icon: <HomeRounded />, link: "/" },
            { title: "Mới nhất", link: "/moi-nhat" },
            { title: "Hay nhất", link: "/hay-nhat" },
            { title: "Phổ biến", link: "/pho-bien" },
            { title: "Thể loại", link: "/the-loai" },
          ].map((item) => (
            <ButtonLink
              fullWidth
              href={item.link}
              style={{ flex: 1 }}
              key={item.link}
            >
              {item.icon}
              {item.title && (
                <Typography className="sb">{item.title}</Typography>
              )}
            </ButtonLink>
          ))}
        </FlexBox>
      </AppBar>
      <Box component="main" sx={{ padding: 2 }}>
        {children}
      </Box>
      <Box component="footer">
        <Typography
          sx={{ padding: 2, textAlign: "center", color: colors.grey.A400 }}
          variant="subtitle1"
        >{`${BRAND_DATA.DOMAIN} - ${BRAND_DATA.SLOGAN} - 2023`}</Typography>
      </Box>
    </>
  );
}
