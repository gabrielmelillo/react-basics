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
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import { Platform } from "./services/platform-service";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export function App() {
  const { themeSetting, handleTheme } = useTheme();

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
        <Box
          component="main"
          maxWidth={1040}
          margin="auto"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
          <Typography variant="h3" marginBottom={5}>
            {gameQuery.genre?.name || "Top"} Games
          </Typography>
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
