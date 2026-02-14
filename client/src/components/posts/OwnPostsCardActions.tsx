"use client";
import { deleteExhibit } from "@/api/actions/exhibitActions";
import { useAppDispatch } from "@/store/hooks";
import { openCommentModal } from "@/store/slices/commentSlice";
import { CardActions, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  exhibitId: number;
}

export const OwnPostsCardActions = ({ exhibitId }: Props) => {
  const dispatch = useAppDispatch();

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

      <IconButton onClick={handleDeletePost} color="error">
        <DeleteIcon />
      </IconButton>
    </CardActions>
  );
};
