import React , {useState} from 'react'

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CreatePost() {
  return (
    <div className="beneathAppBar">
      {/* <h1 style={{color: "white"}}>Hello there</h1> */}
      <Grid container justifyContent="center">
        <Grid item xs={12} style={{ marginRight: "5rem", marginLeft: "5rem" }}>
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
            required
            fullWidth
            id="title"
            label="&nbsp;&nbsp;Title..."
            name="title"
            // autoComplete="email"
            autoFocus
            // onChange={handleChange}
            color="secondary"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} style={{ marginRight: "5rem", marginLeft: "5rem" }}>
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
            required
            fullWidth
            id="content"
            label="&nbsp;&nbsp;Content..."
            name="content"
            // autoComplete="email"
            autoFocus
            // onChange={handleChange}
            color="secondary"
            variant="standard"
            multiline
            maxRows={15}
            rows={8}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CreatePost


      // <Grid>
      //   <Box
      //   component="form"
      //   autoComplete="off"
      //   // onSubmit={handleSubmit}
      //   noValidate
      //   sx={{ mt: 1, color: "white" }}
      // >
      //   <TextField
      //     id="title-field"
      //     label="title"
      //     variant="standard"
      //     required
      //     defaultValue="Title..."
      //     color="white"
      //     sx={{
      //       backgroundColor: "white",
      //       color: "white",
      //       mt: 2,
      //       px: 1,
      //       py: 1,
      //     }}
      //     //   onChange={handleTitleChange}
      //   />
      //   <TextField
      //   id="outlined-multiline-flexible"
      //     label="Multiline"
      //     multiline
      //     maxRows={4}
      //     //   value={value}
      //     //   onChange={handleContentChange}
      //   />
      // </Box>
      // </Grid>