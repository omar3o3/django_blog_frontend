import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axiosInstance from "../axios";
import { styled } from "@mui/material/styles";

import { blueGrey } from "@mui/material/colors";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function SearchBar({ setBlogState }) {
  const [searchOptionState, setSearchOptionState] = useState("User");
  const [searchState, setSearchState] = useState("");
  const searchOptions = ["User", "Tag", "Blog Content"];
  const [dialogOpenState, setDialogOpenState] = React.useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[700],
    },
  }));

  const handleClose = () => {
    setDialogOpenState(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchState);
    // console.log(searchOptionState);
    axiosInstance
      .post(
        `/blog-api/search-${searchOptionState.toLowerCase().replace(" ", "-")}`,
        {
          searchContent: searchState,
        }
      )
      .then((resp) => {
        setBlogState(resp.data)
    })
      .catch(() => setDialogOpenState(true));
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
            {/* <Button
              type="submit"
              variant="contained"
              // color= 'secondary'
              // color= 'blueGrey'
              color="neutral"
              //   size="large"
              sx={{ height: "3rem" }}
            >
              Search
            </Button>
            /> */}
            <ColorButton
              type="submit"
              variant="contained"
              sx={{ height: "3rem" }}
            >
              Search
            </ColorButton>
          </Grid>
        </Box>
      </div>
      {dialogOpenState ? (
        <Dialog
          open={dialogOpenState}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {/* <DialogTitle id="alert-dialog-title">
            {`${searchOptionState} `}
          </DialogTitle> */}
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              No results found with your search request.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </ThemeProvider>
  );
}

export default SearchBar;
