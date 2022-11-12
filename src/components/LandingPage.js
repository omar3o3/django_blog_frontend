import React from 'react'
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function LandingPage({ purpleBackground, mainBlackBackground }) {
  // const handleCreate = () => {
  //   console.log("hi");
  // };
  const navigate = useNavigate()

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#813772",
      },
    },
  });

  const FabStyle = {
    margin: 0,
    // top: "auto",
    right: 50,
    // bottom: 20,
    top: 150,
    left: "auto",
    position: "fixed",
  };

  return (
    <div className="beneathAppBar">
      <ThemeProvider theme={theme}>
        <Box>
          <Grid>
            <Grid>
              <h1 style={{ color: "white", textAlign: "center" }}>Test Run</h1>
            </Grid>
            <Box>
              <Fab
                color="secondary"
                aria-label="add"
                style={FabStyle}
                // size="large"
                onClick={()=> navigate("/create-post")}
              >
                <CreateIcon />
              </Fab>
            </Box>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LandingPage