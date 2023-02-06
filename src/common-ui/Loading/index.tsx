import {
  Box,
  BoxProps,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";

const Loading = ({
  title,
  CircularProgressProps,
  ...BoxProps
}: {
  title?: string;
  CircularProgressProps?: CircularProgressProps;
} & BoxProps) => {
  return (
    <Box {...BoxProps} sx={{ textAlign: "center", ...BoxProps.sx }}>
      <CircularProgress size="large" {...CircularProgressProps} />
      {title && (
        <Typography variant="h5" sx={{ mt: 2 }}>
          {title}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
