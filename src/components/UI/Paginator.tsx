import { Box } from "@mui/material";
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

  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {pages.map((p) => (
        <Link key={p} href={`${navigationPath}?page=${p}`}>
          <Box
            sx={{
              padding: "4px 8px",
              border: p === page ? "1px solid black" : "1px solid transparent",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {p}
          </Box>
        </Link>
      ))}
    </Box>
  );
};
