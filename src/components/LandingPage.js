import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import BlogCard from "./BlogCard";
import axiosInstance from "../axios";
import SearchBar from "./SearchBar";

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
          <SearchBar setBlogState={setBlogState} />
          {/* <Box justifyContent="center"> */}
          {/* spacing={2} */}
          <Grid container justifyContent="center">
            <Stack
              direction="column"
              // justifyContent="flex-start"
              // alignItems="center"
              spacing={2}
              sx={{ width: "60%" }}
              // sx={{ width: "40%" }}
            >
              {blogState.map((blog) => (
                <BlogCard
                  blog={blog}
                  purpleBackground={purpleBackground}
                  userIdState={userIdState}
                />
              ))}
            </Stack>
          </Grid>
          {/* </Box> */}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LandingPage;
