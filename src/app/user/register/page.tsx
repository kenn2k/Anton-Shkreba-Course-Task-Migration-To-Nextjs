import { RegisterForm } from "@/components/auth/RegisterForm";
import { Box } from "@mui/material";

const UserRegisterPage = () => {
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
      <RegisterForm />
    </Box>
  );
};

export default UserRegisterPage;
