import BRAND_DATA from "@/src/constants/brand";
import { Search, HomeRounded } from "@mui/icons-material";
import { AppBar, Box, Button, colors, Typography } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";
import FlexBox from "../../components/FlexBox";
import TextField from "../../components/TextField";

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
            <Link href={item.link} style={{ flex: 1 }} key={item.link}>
              <Button fullWidth>
                {item.icon}
                {item.title && (
                  <Typography className="sb">{item.title}</Typography>
                )}
              </Button>
            </Link>
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
