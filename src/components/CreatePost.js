import React , {useState} from 'react'

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CreatePost() {
  return (
    <>
      <Box component="form" autoComplete="off">
        <TextField
          id="title-field"
          label="title"
          variant="standard"
          required
          defaultValue="Title..."
        //   onChange={handleTitleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        //   value={value}
        //   onChange={handleContentChange}
        />
      </Box>
    </>
  );
}

export default CreatePost