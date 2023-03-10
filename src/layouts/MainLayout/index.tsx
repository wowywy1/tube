import FlexBox from "@/src/common-ui/FlexBox";
import NavLinks from "@/src/components/NavLinks";
import SearchField from "@/src/components/SearchField";
import BRAND_DATA from "@/src/constants/brand";
import { List } from "@mui/icons-material";
import {
  AppBar,
  Box,
  colors,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpenDrawer(false);
  }, [router.asPath]);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          px: 2,
          pb: { xs: 2, md: 0 },
        }}
      >
        <FlexBox sx={{ flex: 1, flexWrap: "wrap", justifyContent: "center" }}>
          <Box
            component="h1"
            sx={{
              width: { xs: "100%", sm: "200px" },
              maxHeight: "80px",
              textAlign: "center",
            }}
          >
            <Link href="/">
              <img
                src="/images/ClipShow.png"
                alt={BRAND_DATA.SLOGAN}
                style={{ maxWidth: "100%", maxHeight: "80px" }}
              />
            </Link>
          </Box>
          <SearchField />
          <NavLinks
            maxWidth="md"
            sx={{
              display: { xs: "none", sm: "flex" },
              ml: { xs: 0, lg: 2 },
              minWidth: { xs: "0px", sm: "500px" },
              flex: 2,
            }}
            type="header"
          />

          <Box sx={{ display: { xs: "block", sm: "none" }, ml: 1 }}>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <List />
            </IconButton>
          </Box>
          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="top"
          >
            <NavLinks type="drawer" />
          </Drawer>
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
