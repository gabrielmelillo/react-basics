import {
  Box,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import usePlatforms from "./hooks/usePlatforms";
import { Platform } from "./services/platform-service";

export function App() {
  const { themeSetting, handleTheme } = useTheme();
  const { platforms } = usePlatforms();
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
          <FormControl sx={{ marginBottom: 5, minWidth: 150 }}>
            <InputLabel id="platform-label">Platform</InputLabel>
            <Select labelId="platform-label" label="Platform">
              {platforms.map((platform) => (
                <MenuItem
                  value={platform.slug}
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
