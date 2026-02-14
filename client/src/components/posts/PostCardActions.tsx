"use client";

import { deleteExhibit } from "@/api/actions/exhibitActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { openCommentModal } from "@/store/slices/commentSlice";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

interface Props {
  exhibitId: number;

  user: { id: number };
}

export const PostCardActions = ({ exhibitId, user }: Props) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.user);

  const isAuthor = currentUser?.id === user.id;

  const handleOpenComments = () => {
    dispatch(openCommentModal(exhibitId));
  };

  const handleDeletePost = () => {
    dispatch(deleteExhibit(exhibitId));
  };

  return (
    <CardActions disableSpacing>
      <IconButton onClick={handleOpenComments}>
        <CommentIcon />
      </IconButton>

      {isAuthor && (
        <IconButton onClick={handleDeletePost} color="error">
          <DeleteIcon />
        </IconButton>
      )}
    </CardActions>
  );
};
