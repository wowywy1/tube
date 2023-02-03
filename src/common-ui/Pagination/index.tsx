import {
  PaginationItem,
  PaginationProps,
  Pagination as MUIPagination,
} from "@mui/material";
import Link from "next/link";

const Pagination = ({
  pageRoute,
  ...PaginationProps
}: { pageRoute?: string } & PaginationProps) => {
  return (
    <MUIPagination
      {...PaginationProps}
      sx={{
        "& .MuiPagination-ul": {
          justifyContent: "center",
        },
        ...PaginationProps.sx,
      }}
      size="large"
      variant="outlined"
      color="primary"
      renderItem={
        pageRoute
          ? (item) => {
              const url =
                item.page == 1 ? pageRoute : `${pageRoute}/${item.page}`;
              return (
                <Link href={url}>
                  <PaginationItem {...item} />
                </Link>
              );
            }
          : undefined
      }
    />
  );
};

export default Pagination;
