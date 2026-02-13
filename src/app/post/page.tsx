import { PostForm } from "@/components/posts/PostForm";
import { Box, Paper, Typography } from "@mui/material";

const PostPage = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            mb: 3,
            textAlign: "center",
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Create New Post
        </Typography>
        <PostForm />
      </Paper>
    </Box>
  );
};

export default PostPage;
