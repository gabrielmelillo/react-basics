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
  Skeleton,
  Toolbar,
} from "@mui/material";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function MenuDrawer({ onSelectedGenre, selectedGenre }: Props) {
  const drawerWidth = 240;
  const { genres, isLoading } = useGenres();
  const skeletons = [];
  for (let i = 0; i < 12; i++) skeletons[i] = i;

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
          {isLoading ? (
            <>
              {skeletons.map((i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton disabled>
                    <Skeleton
                      width={40}
                      height={40}
                      variant="circular"
                      sx={{ marginRight: 2 }}
                    ></Skeleton>
                    <ListItemText>
                      <Skeleton></Skeleton>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          ) : (
            <>
              {genres.map((genre) => (
                <ListItem key={genre.name} disablePadding>
                  <ListItemButton
                    selected={selectedGenre == genre}
                    onClick={() => onSelectedGenre(genre)}
                  >
                    <ListItemAvatar>
                      <Avatar src={genre.image_background}></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={genre.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
