import { Box } from "@mui/material";

import { PostCard } from "./PostCard";

import type { Exhibit } from "../../types";

import { CommentModal } from "../comments/CommentModal";
import { Paginator } from "../UI/Paginator";

export interface PostListProps {
  exhibits: {
    data: Exhibit[];
    lastPage: number;
  };
  page: number;
}

export const PostList = ({ exhibits, page }: PostListProps) => {
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
      <Paginator navigationPath="/" page={+page} lastPage={exhibits.lastPage} />
      {exhibits?.data?.map((char: Exhibit) => (
        <PostCard key={char.id} {...char} />
      ))}
      <Paginator navigationPath="/" page={+page} lastPage={exhibits.lastPage} />

      <CommentModal />
    </Box>
  );
};
