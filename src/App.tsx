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

export function App() {
  const { themeSetting, handleTheme } = useTheme();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer
          handleSelectedGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
        <Box
          component="main"
          maxWidth={1040}
          margin="auto"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
          <Typography variant="h3" marginBottom={5}>
            {selectedGenre?.name || "Top"} Games
          </Typography>
          <PlatformSelector
            handleSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
