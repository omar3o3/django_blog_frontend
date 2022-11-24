import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"

import axiosInstance from "../axios";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function SearchBar() {
  const [searchOptionState, setSearchOptionState] = useState("User");
  const [searchState, setSearchState] = useState("");
  const searchOptions = ["User", "Tag", "Blog Content"];

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(searchState);
        // console.log(searchOptionState);
        axiosInstance.post(`/blog-api/search-${searchOptionState}`, {
          searchContent: searchState,
        });
    };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ marginBottom: "2rem" }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <TextField
              id="select-search-option"
              select
              color="secondary"
              value={searchOptionState}
              onChange={(e) => setSearchOptionState(e.target.value)}
              //   sx={{ width: "19ch" }}
            >
              {searchOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="select-search-option"
              noValidate
              color="secondary"
              placeholder="what are you searching for?"
              helperText={
                searchOptionState === "Tag"
                  ? "seperate each tag with a space"
                  : null
              }
              onChange={(e) => setSearchState(e.target.value)}
              sx={{
                width: "40%",
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              //   size="large"
              sx={{ height: "3rem" }}
            >
              Search
            </Button>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default SearchBar;

