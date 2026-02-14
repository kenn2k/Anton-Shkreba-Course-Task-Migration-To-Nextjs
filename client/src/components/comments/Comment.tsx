"use client";
import {
  deleteComment,
  getCommentsByExhibitId,
} from "@/api/actions/commentActions";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Comments } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { useRequest } from "ahooks";

export const Comment = ({ exhibitId }: { exhibitId: number }) => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.user.user);

  const {
    data: comments,
    loading,
    error,
  } = useRequest(() => getCommentsByExhibitId(exhibitId), {
    refreshDeps: [exhibitId],
  });

  const handleDelete = (commentId: number) => {
    dispatch(deleteComment({ exhibitId, commentId }));
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" variant="body2">
        Failed to load comments
      </Typography>
    );
  }

  if (!comments?.length) {
    return (
      <Typography variant="body2" sx={{ color: "text.secondary", py: 1 }}>
        No comments yet
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      {comments.map((comment: Comments) => {
        const isAuthor = currentUser?.id === comment.user.id;

        return (
          <Box key={comment.id}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">{comment.user.username}</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {new Date(comment.createdAt).toLocaleString()}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>{comment.text}</Typography>

              {isAuthor && (
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDelete(comment.id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
