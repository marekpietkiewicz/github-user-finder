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
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";

import Icon, { IconProps } from "@mui/material/Icon";

// declare module "@mui/material/styles" {
//   interface Theme {
//     marek: {
//       width: string;
//     };
//   }

//   interface ThemeOptions {
//     marek: {
//       width: string;
//     };
//   }
// }

// const theme = createTheme({
//   palette: {
//     background: {
//       default: "#EFEFEF",
//     },
//   },
//   marek: {
//     width: "300px",
//   },
// });

//theme.marek.width

const NavBar: FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar
        position="static"
        sx={{ width: 1, backgroundColor: theme.palette.common.white }}
      >
        <Container
          // maxWidth="xl"
          sx={{
            width: theme.extra.navbar.width,
            // backgroundColor: "#e0e0e0",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                // alignItems: "flex-end",
                width: 1,
                // flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SearchIcon
                fontSize="small"
                sx={{
                  mr: 1,
                  color: theme.palette.common.black,
                  opacity: "0.54",
                  // lineHeight: "32px",
                  // fontSize: "17px",
                }}
              />
              <InputBase
                id="input-with-sx"
                // label="With sx"
                sx={{ width: 1 }}
                placeholder="Search for GitHub users..."
              />
              <IconButton
                sx={{
                  ml: 1,
                }}
              >
                <StarIcon
                  sx={{
                    color: theme.palette.common.black,
                    opacity: "0.54",
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

// const SearchBar: FC = () => {};

const DashboardPage: FC = () => {
  const theme = useTheme();
  return (
    <>
      <NavBar />
      <Container component="main" sx={{ width: theme.extra.navbar.width }}>
        {/* <AppBar /> */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // width: theme.marek.width,
          }}
        >
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: 1 }}
          >
            dadasd
          </Box>
          {/* <MovieItem2 /> */}
        </Box>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default DashboardPage;
