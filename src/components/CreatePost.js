import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreatePost() {
  const [titleState, setTitleState] = useState("");
  const [contentState, setContentState] = useState("");
  const [tagState, setTagState] = useState("");
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  const FabStyle = {
    marginTop: "1%",
    left: "8%",
    position: "fixed",
  };

      const darkTheme = createTheme({
        palette: {
          mode: "dark",
        },
      });

  const handleSubmit = (e) => {
    e.preventDefault();

    const tagList = tagState.split(" ");
    // console.log(tagList);

    if (titleState !== "" && contentState !== "") {
      axiosInstance
        .post(`/blog-api/create-post`, {
          blog_data: {
            title: titleState,
            content: contentState,
            user: userId,
          },
          tag_data: {
            tags: tagList,
          },
        })
        .then((resp) => navigate("/home"))
        .catch((error) => console.error(error.response.data));
        // make this into a window alert
    }
    //but else statement here to display alert saying user must provide title and content
  };

  return (
    <div className="beneathAppBar" style={{ marginBottom: "5%" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container justifyContent="center">
            <Grid
              item
              xs={12}
              style={{ marginRight: "5rem", marginLeft: "5rem" }}
            >
              <TextField
                sx={{
                  // backgroundColor: "white",
                  // color: "white",
                  mt: 2,
                  // mx:5,
                  px: 1,
                  py: 1,
                }}
                margin="normal"
                // required
                fullWidth
                id="title"
                label="&nbsp;&nbsp;Title..."
                name="title"
                autoFocus
                onChange={(e) => setTitleState(e.target.value)}
                color="secondary"
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginRight: "5rem", marginLeft: "5rem" }}
            >
              <TextField
                sx={{
                  // backgroundColor: "white",
                  // color: "white",
                  mt: 2,
                  px: 1,
                  py: 1,
                }}
                margin="normal"
                // required
                fullWidth
                id="content"
                label="&nbsp;&nbsp;Content..."
                name="content"
                autoFocus
                onChange={(e) => setContentState(e.target.value)}
                color="secondary"
                variant="standard"
                multiline
                // maxRows={15}
                rows={8}
              />
              <Grid item xs={12}>
                <TextField
                  sx={{
                    // backgroundColor: "white",
                    // color: "white",
                    mt: 2,
                    px: 1,
                    py: 1,
                  }}
                  // style={{ marginLeft: "5rem" }}
                  margin="normal"
                  fullWidth
                  id="tag"
                  label="&nbsp;&nbsp;Tags..."
                  name="tag"
                  autoFocus
                  multiline
                  onChange={(e) => setTagState(e.target.value)}
                  color="secondary"
                  variant="standard"
                  helperText="Tags must seperated with a space"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Button type="submit" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default CreatePost;
