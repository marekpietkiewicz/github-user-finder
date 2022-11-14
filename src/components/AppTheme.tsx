import { FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

interface AdditionalInterface {
  extra: {
    navbar: {
      width: string;
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
  },
});

//theme.marek.width

const AppTheme: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
