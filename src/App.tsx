import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Box, CssBaseline, Paper, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Starter App
          </Typography>
        </Paper>
      </Box>
    </>
  );
}

export default App;
