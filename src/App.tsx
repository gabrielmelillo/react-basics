import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Search
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Hello world</Typography>
      </Box>
    </Box>
  );
}

export default App;
