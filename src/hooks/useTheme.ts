import { createTheme } from "@mui/material";
import { useState } from "react";

const useTheme = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const themeSetting = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const handleTheme = () => {
    localStorage.setItem("darkMode", isDark ? "false" : "true");
    setIsDark(!isDark);
  };

  return { isDark, setIsDark, themeSetting, handleTheme };
};

export default useTheme;
