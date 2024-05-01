import {
  Box,
  CssBaseline,
  Stack,
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
import Sort, { SortOption } from "./components/Sort";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: SortOption | null;
  search: string | null;
}

export function App() {
  const { themeSetting, handleTheme } = useTheme();

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sort: null,
    search: null,
  });

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar
          themeHandler={handleTheme}
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        />
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
          <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
            <PlatformSelector
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Sort
              onSelectedSort={(sort) => setGameQuery({ ...gameQuery, sort })}
            />
          </Stack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
