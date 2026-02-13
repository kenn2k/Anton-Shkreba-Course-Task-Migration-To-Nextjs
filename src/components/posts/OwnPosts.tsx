"use client";

import { useRequest } from "ahooks";
import { Box, Typography } from "@mui/material";
import { getMyExhibits } from "@/api/actions/exhibitActions";
import { Exhibit } from "@/types";
import { OwnPostsCard } from "./OwnPostsCard";
import { CommentModal } from "../comments/CommentModal";

export const OwnPosts = () => {
  const { data: myExhibits } = useRequest(getMyExhibits);

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
      {myExhibits.data.map((post: Exhibit) => (
        <OwnPostsCard key={post.id} {...post} />
      ))}

      <CommentModal />
    </Box>
  );
};
