"use client";

import Grid from "@mui/material/Grid";
import { useRequest } from "ahooks";
import { Typography } from "@mui/material";
import { getMyExhibits } from "@/api/actions/exhibitActions";
import { Exhibit } from "@/types";
import { OwnPostsCard } from "./OwnPostsCard";

export const OwnPosts = () => {
  const { data: myExhibits } = useRequest(getMyExhibits);
  if (!myExhibits?.data?.length) {
    return (
      <Typography variant="body2" sx={{ color: "text.secondary", py: 1 }}>
        No personal posts found
      </Typography>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        {myExhibits?.data?.map((post: Exhibit) => (
          <Grid key={post.id}>
            <OwnPostsCard {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
