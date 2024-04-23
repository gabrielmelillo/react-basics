import { Box, CssBaseline, Grid, ThemeProvider, Toolbar } from "@mui/material";
import MenuDrawer from "./components/MenuDrawer";
import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";
import useGames from "./hooks/useGames";
import GameCard from "./components/GameCard";

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
