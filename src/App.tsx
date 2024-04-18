import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuDrawer from "./components/MenuDrawer";
import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";
import useGames from "./hooks/useGames";

function App() {
  const { themeSetting, handleTheme } = useTheme();
  const { games } = useGames();

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2}>
            {games.map((game) => (
              <Grid item xs={4} key={game.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="260"
                    image={game.background_image}
                  />
                  <CardContent sx={{ height: 100 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
