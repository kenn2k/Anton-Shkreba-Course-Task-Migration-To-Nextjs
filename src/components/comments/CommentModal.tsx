"use client";
import { Dialog, DialogContent, Divider } from "@mui/material";

import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeCommentModal } from "@/store/slices/commentSlice";

export const CommentModal = () => {
  const dispatch = useAppDispatch();
  const exhibitId = useAppSelector((state) => state.comment.activeExhibitId);

  const handleClose = () => {
    dispatch(closeCommentModal());
  };

  const isOpen = Boolean(exhibitId);

  if (!exhibitId) return null;

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogContent>
        <Comment exhibitId={exhibitId} />
        <Divider sx={{ my: 2 }} />
        <CommentForm exhibitId={exhibitId} />
      </DialogContent>
    </Dialog>
  );
};
