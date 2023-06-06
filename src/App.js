import React, { useState } from "react";
import Navbar from "Components/Navbar";
import SideBar from "Components/SideBar";
import Feed from "Components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import RightBar from "Components/RightBar";
import Add from "Components/Add";
const App = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
