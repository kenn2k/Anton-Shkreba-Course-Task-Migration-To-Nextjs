import { LoginForm } from "@/components/auth/LoginForm";
import { Box } from "@mui/material";

const UserLoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)",
        width: "100vw",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default UserLoginPage;
