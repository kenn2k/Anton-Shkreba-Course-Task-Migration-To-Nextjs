"use client";
import { Box, Pagination, PaginationItem } from "@mui/material";
import Link from "next/link";

interface PaginatorProps {
  navigationPath: string;
  lastPage: number;
  page: number;
}

export const Paginator = ({
  page,
  lastPage,
  navigationPath,
}: PaginatorProps) => {
  if (lastPage <= 1) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
      <Pagination
        count={lastPage}
        page={page}
        variant="outlined"
        shape="rounded"
        color="primary"
        siblingCount={1}
        boundaryCount={1}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`${navigationPath}?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Box>
  );
};
