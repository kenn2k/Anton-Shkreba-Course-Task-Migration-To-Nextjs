"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

import StoreProvider from "./StoreProvider";
import theme from "@/config/theme";
import { AuthInit } from "@/components/auth/AuthInit";
import SocketProvider from "./SocketProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <StoreProvider>
        <SocketProvider>
          <AuthInit />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </SocketProvider>
      </StoreProvider>
    </AppRouterCacheProvider>
  );
}
