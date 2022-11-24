import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function SearchBar() {
    const [searchOptionState, setSearchOptionState] = useState('User');
    const searchOptions = ["User", "Tag", "Blog Content"];

    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });

//   const handleMenuChange = () => {};

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{marginBottom: '2rem'}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { width: "18ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="select-search-option"
              select
              value={searchOptionState}
              onChange={(e) => setSearchOptionState(e.target.value)}
            >
              {searchOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField
            id="select-search-option"
            noValidate
            placeholder="what are you searching for?"
            sx={{
              width: "40%",
            }}
          ></TextField>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default SearchBar;
