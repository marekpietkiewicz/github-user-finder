import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface AdditionalInterface {
  extra: {
    navbar: {
      width: string;
    };
    icon: {
      transparency: string;
      goldColor: string;
    };
  };
}

declare module "@mui/material/styles" {
  interface Theme extends AdditionalInterface {}
  interface ThemeOptions extends AdditionalInterface {}
}

const theme = createTheme({
  palette: {
    background: {
      default: "#EFEFEF",
    },
  },
  extra: {
    navbar: {
      width: "600px",
    },
    icon: {
      transparency: "0.54",
      goldColor: "#F2C94C",
    },
  },
});

const AppTheme: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
