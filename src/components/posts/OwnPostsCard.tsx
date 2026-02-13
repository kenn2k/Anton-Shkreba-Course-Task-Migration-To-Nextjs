import { Exhibit } from "@/types";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export const OwnPostsCard = ({ description }: Exhibit) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia component="img" height="194" image="/next.svg" />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
