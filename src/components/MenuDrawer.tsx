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

function MenuDrawer() {
  const drawerWidth = 240;
  const { genres, isLoading } = useGenres();

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
              {[...Array(20)].map(() => (
                <ListItem disablePadding>
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
                  <ListItemButton>
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
