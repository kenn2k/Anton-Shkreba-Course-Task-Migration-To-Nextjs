import { Box, Typography } from "@mui/material";

import { Exhibit, ExhibitsResponse } from "@/types";
import { OwnPostsCard } from "./OwnPostsCard";
import { CommentModal } from "../comments/CommentModal";
import { Paginator } from "../UI/Paginator";

interface OwnPostsProps {
  myExhibits: ExhibitsResponse;
  page?: number;
}

export const OwnPosts = ({ myExhibits, page = 1 }: OwnPostsProps) => {
  if (!myExhibits?.data?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          No personal posts found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        py: 4,
      }}
    >
      <Paginator
        navigationPath="/home"
        page={+page}
        lastPage={myExhibits.lastPage}
      />
      {myExhibits.data.map((post: Exhibit) => (
        <OwnPostsCard key={post.id} {...post} />
      ))}

      <CommentModal />
    </Box>
  );
};
