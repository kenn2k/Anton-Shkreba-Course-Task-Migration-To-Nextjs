import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Exhibit } from "@/types";

import { PostCardActions } from "./PostCardActions";

export const PostCard = ({ description, id, user }: Exhibit) => {
  return (
    <Card sx={{ width: "100%", maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="194"
        image="/next.svg"
        alt="Exhibit image"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>

      <PostCardActions exhibitId={id} user={user} />
    </Card>
  );
};
