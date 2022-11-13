import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreatePost() {
  const [titleState, setTitleState] = useState("");
  const [contentState , setContentState] = useState("")
  const [tagState, setTagState] = useState("");

  const FabStyle = {
    marginTop: "1%",
    left: "8%",
    position: "fixed",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const tagList = tagState.split(/[# ]/).filter((x) => x !== "");
    // const filteredTagList = tagList.filter((x) => x === x.startsWith('#'));
    // console.log(tagList);
    // console.log(filteredTagList);

    const tagList = tagState.split(' ')
    console.log(titleState);
    console.log(contentState);
    console.log(tagList);
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
