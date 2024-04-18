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
import useGenres from "../hooks/useGenres";

function MenuDrawer() {
  const drawerWidth = 240;
  const { genres } = useGenres();

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
