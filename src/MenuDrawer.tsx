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

function MenuDrawer() {
  const drawerWidth = 240;

  const genres = [
    {
      image:
        "data:image/png;base64,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",
      name: "Action",
    },
  ];

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
          {genres.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
