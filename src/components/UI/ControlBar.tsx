"use client";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Toolbar } from "@mui/material";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { logoutUser } from "@/api/actions/userActions";

export const ControlBar = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const handleLogOutClick = async () => {
    await dispatch(logoutUser()).unwrap();
    route.replace("/user/login");
    route.refresh();
  };
  return (
    <Toolbar sx={{ gap: 2 }}>
      <Button
        color="inherit"
        startIcon={<HomeIcon />}
        sx={{ textTransform: "none", fontSize: "1rem" }}
        onClick={() => route.push("/")}
      >
        All Posts
      </Button>

      {isAuthenticated && (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => route.push("/post")}
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.25)" },
              fontWeight: "bold",
            }}
          >
            New Post
          </Button>

          <Button
            color="inherit"
            startIcon={<ListAltIcon />}
            sx={{ textTransform: "none", fontSize: "1rem" }}
            onClick={() => route.push("/home")}
          >
            My Posts
          </Button>
        </>
      )}

      <Box sx={{ flexGrow: 1 }} />

      {isAuthenticated ? (
        <Button
          color="inherit"
          onClick={handleLogOutClick}
          endIcon={<LogoutIcon />}
          sx={{
            opacity: 0.9,
            "&:hover": {
              opacity: 1,
              backgroundColor: "rgba(255, 0, 0, 0.1)",
            },
          }}
        >
          Log Out
        </Button>
      ) : (
        <Button color="inherit" onClick={() => route.push("/user/login")}>
          Login
        </Button>
      )}
    </Toolbar>
  );
};
