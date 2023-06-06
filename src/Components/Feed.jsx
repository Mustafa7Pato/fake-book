import { Box } from "@mui/material";
import React from "react";
import Carrd from "./Carrd";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Carrd />
      <Carrd />
      <Carrd />
      <Carrd />
      <Carrd />
      <Carrd />
      <Carrd />
    </Box>
  );
};

export default Feed;
