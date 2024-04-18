import {
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuDrawer from "./components/MenuDrawer";
import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";

function App() {
  const { themeSetting, handleTheme } = useTheme();

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>Hello world</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
