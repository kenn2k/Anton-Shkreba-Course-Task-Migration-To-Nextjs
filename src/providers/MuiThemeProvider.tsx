"use client";
import theme from "@/config/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
