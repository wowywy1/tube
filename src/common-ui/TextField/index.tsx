import React, { ReactNode } from "react";
import MUITextField, { TextFieldProps } from "@mui/material/TextField";
import { colors, IconButton, InputAdornment } from "@mui/material";

export default function TextField({
  icon,
  onClickIcon,
  ...TextFieldProps
}: { icon: ReactNode; onClickIcon: () => void } & TextFieldProps) {
  return (
    <MUITextField
      {...TextFieldProps}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" variant="filled">
            <IconButton sx={{ px: 2 }} onClick={onClickIcon}>
              {icon}
            </IconButton>
          </InputAdornment>
        ),
        sx: { borderRadius: 8, pr: 0 },
      }}
      inputProps={{
        sx: { px: 2, py: 1 },
      }}
    />
  );
}
