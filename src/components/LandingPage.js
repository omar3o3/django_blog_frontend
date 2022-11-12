import React from 'react'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";

function LandingPage() {

  const handleCreate = () =>{
    console.log('hi')
  }

  return (
    // <div>LandingPage</div>
    <>
      <Box>
        <Grid>
          <Grid>
            <h1>Test Run</h1>
          </Grid>
          <Grid>
            <Button onClick={handleCreate}>
              <CreateIcon fontSize="large" sx={{ color: "#813772" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LandingPage