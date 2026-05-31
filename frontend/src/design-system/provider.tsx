"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

type DesignSystemProviderProps = {
  children: React.ReactNode;
};

export function DesignSystemProvider({ children }: DesignSystemProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
