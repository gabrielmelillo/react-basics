import {
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import MenuDrawer from "./components/MenuDrawer";
import { useState } from "react";
import NavBar from "./components/NavBar";

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
        <NavBar themeHandler={() => setIsDark(!isDark)} />
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
