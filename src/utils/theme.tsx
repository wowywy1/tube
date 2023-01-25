import { darkScrollbar } from "@mui/material";
import { pink } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const _commonThemeObject: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: pink,
  },
  typography: {
    fontFamily: '"Fira Sans", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: darkScrollbar(),
      }),
    },
  },
};

export const theme = createTheme(_commonThemeObject);
