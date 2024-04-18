import {
  AppBar,
  Box,
  Switch,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  FormControlLabel,
} from "@mui/material";
import MenuDrawer from "./MenuDrawer";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Game Search
            </Typography>
            <FormControlLabel
              control={<Switch />}
              label="Dark Mode"
              sx={{ marginLeft: 2 }}
              onChange={() => setIsDark(!isDark)}
            />
          </Toolbar>
        </AppBar>
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
