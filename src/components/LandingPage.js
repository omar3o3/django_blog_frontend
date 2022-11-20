import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";

// import LikerComp from "./LikerComp";
// import CreateComments from "./CreateComments";
// import ShowComments from "./ShowComments";
import BlogCard from "./BlogCard";

import axiosInstance from "../axios";

function LandingPage({ purpleBackground, mainBlackBackground, userIdState }) {
  const navigate = useNavigate();

  const [blogState, setBlogState] = useState([]);

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

  useEffect(() => {
    axiosInstance
      .get("blog-api/get-blogs")
      .then((resp) => setBlogState(resp.data));
  }, []);
  // console.log(blogState);

  return (
    <div className="beneathAppBar">
      <ThemeProvider theme={theme}>
        <Box>
          <Grid>
            <Box>
              <Fab
                color="secondary"
                aria-label="add"
                style={FabStyle}
                // size="large"
                onClick={() => navigate("/create-post")}
              >
                <CreateIcon />
              </Fab>
            </Box>
          </Grid>
          <Box>
            {/* spacing={2} */}
            <Grid container justifyContent="center">
              {blogState.map((blog) => (
                <BlogCard
                  blog={blog}
                  purpleBackground={purpleBackground}
                  userIdState={userIdState}
                />
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LandingPage;
