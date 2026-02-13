import { Exhibit } from "@/types";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { OwnPostsCardActions } from "./OwnPostsCardActions";

export const OwnPostsCard = ({ description, id }: Exhibit) => {
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

      <OwnPostsCardActions exhibitId={id} />
    </Card>
  );
};
