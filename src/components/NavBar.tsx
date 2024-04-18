import {
  AppBar,
  Avatar,
  Box,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.webp";

interface Props {
  themeHandler: () => void;
}

export default function NavBar({ themeHandler }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Avatar src={logo} variant="square" />
          <Typography variant="h6" noWrap sx={{ marginLeft: 1 }}>
            Game Search
          </Typography>
        </Box>
        <FormControlLabel
          control={<Switch />}
          label="Dark Mode"
          onChange={themeHandler}
        />
      </Toolbar>
    </AppBar>
  );
}
