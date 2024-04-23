import {
  Box,
  CssBaseline,
  Grid,
  Skeleton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import MenuDrawer from "./components/MenuDrawer";
import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";
import useGames from "./hooks/useGames";
import GameCard from "./components/GameCard";

function App() {
  const { themeSetting, handleTheme } = useTheme();
  const { games, isLoading } = useGames();
  const skeletons = [];
  for (let i = 0; i > 12; i++) skeletons[i] = i;

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2}>
            {isLoading
              ? skeletons.map((i) => (
                  <Grid key={i} item xs={4}>
                    <Skeleton height={350} variant="rectangular" />
                  </Grid>
                ))
              : games.map((game) => (
                  <Grid item xs={4} key={game.id}>
                    <GameCard game={game} key={game.id} />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
