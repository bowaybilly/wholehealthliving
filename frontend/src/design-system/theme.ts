import { createTheme } from "@mui/material/styles";
import { colorTokens, radiusTokens, typographyTokens } from "./tokens";

export const theme = createTheme({
  palette: {
    primary: {
      main: colorTokens.primary,
      dark: colorTokens.primaryDark,
    },
    secondary: {
      main: colorTokens.secondary,
    },
    background: {
      default: colorTokens.background,
      paper: colorTokens.paper,
    },
    text: {
      primary: colorTokens.textPrimary,
      secondary: colorTokens.textSecondary,
    },
    warning: {
      main: colorTokens.warning,
    },
  },
  shape: {
    borderRadius: radiusTokens.card,
  },
  typography: {
    fontFamily: typographyTokens.fontFamily,
    h1: {
      fontWeight: 300,
      lineHeight: 0.95,
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.action,
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.action,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.card,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: radiusTokens.card,
        },
      },
    },
  },
});
