import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import genreService, { Genre } from "./services/genre-service";
import { useEffect, useState } from "react";

function MenuDrawer() {
  const drawerWidth = 240;
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    genreService
      .getGenres()
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListSubheader>Genres</ListSubheader>
          {genres.map((genre) => (
            <ListItem key={genre.name} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src={genre.image_background} />
                </ListItemAvatar>
                <ListItemText primary={genre.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
