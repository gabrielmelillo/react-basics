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

export function App() {
  const { themeSetting, handleTheme } = useTheme();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <ThemeProvider theme={themeSetting}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar themeHandler={handleTheme} />
        <MenuDrawer handleSelectedGenre={(genre) => setSelectedGenre(genre)} />
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
          <GameGrid selectedGenre={selectedGenre} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
