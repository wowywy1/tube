import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

export default function FlexBox({
  children,
  ...BoxProps
}: { children: ReactNode } & BoxProps) {
  return (
    <Box className="df aic" sx={{ ...BoxProps.sx }} {...BoxProps}>
      {children}
    </Box>
  );
}
