import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
import jwt_decode from "jwt-decode";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreatePost({
  firstNameState,
  lastNameState,
  emailState,
  userNameState,
  userIdState,
}) {
  const [titleState, setTitleState] = useState("");
  const [contentState, setContentState] = useState("");
  const [tagState, setTagState] = useState("");

  const FabStyle = {
    marginTop: "1%",
    left: "8%",
    position: "fixed",
  };

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
            user: userIdState,
          },
          tag_data: {
            tags: tagList,
          },
        })
        .then((resp) => console.log(resp.data));
    }
    //but else statement here to display alert saying user must provide title and content
  };

  return (
    <div className="beneathAppBar" style={{ marginBottom: "5%" }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            style={{ marginRight: "5rem", marginLeft: "5rem" }}
          >
            <TextField
              sx={{
                backgroundColor: "white",
                color: "white",
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
                backgroundColor: "white",
                color: "white",
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
                  backgroundColor: "white",
                  color: "white",
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
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CreatePost;
