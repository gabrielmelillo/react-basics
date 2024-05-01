import {
  AppBar,
  Avatar,
  FormControlLabel,
  InputBase,
  Stack,
  Switch,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import logo from "../assets/logo.webp";
import { Search } from "@mui/icons-material";
import { useRef } from "react";

interface Props {
  themeHandler: () => void;
  onSearch: (search: string) => void;
}

const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar({ themeHandler, onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchRef.current) onSearch(searchRef.current.value);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}
      >
        <Stack direction="row" alignItems="center">
          <Avatar src={logo} variant="square" />
          <Typography variant="h6" noWrap sx={{ marginLeft: 1 }}>
            Game Search
          </Typography>
        </Stack>
        <form style={{ flexGrow: 1 }} onSubmit={handleSearch}>
          <SearchBar>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputRef={searchRef} />
          </SearchBar>
        </form>
        <FormControlLabel
          sx={{ flexShrink: 0 }}
          control={
            <Switch
              defaultChecked={localStorage.getItem("darkMode") === "true"}
            />
          }
          label="Dark Mode"
          onChange={themeHandler}
        />
      </Toolbar>
    </AppBar>
  );
}
