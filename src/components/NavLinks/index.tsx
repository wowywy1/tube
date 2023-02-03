import ButtonLink from "@/src/common-ui/ButtonLink";
import { HomeRounded } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import { useRouter } from "next/router";

const NavLinks = ({
  type,
  ...BoxProps
}: { type: "header" | "drawer" } & BoxProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: type == "header" ? "row" : "column",
        ...BoxProps,
      }}
      component="nav"
      {...BoxProps}
    >
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
          style={{
            flex: type == "header" ? 1 : 0,
            padding: type == "header" ? undefined : "16px",
          }}
          key={item.link}
          color={router.asPath.startsWith(item.link) ? "primary" : "inherit"}
        >
          {item.icon}
          {item.title && (
            <Typography className="sb" sx={{ fontSize: { md: 20 } }} noWrap>
              {item.title}
            </Typography>
          )}
        </ButtonLink>
      ))}
    </Box>
  );
};

export default NavLinks;
