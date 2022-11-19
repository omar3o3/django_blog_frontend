import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import axiosInstance from "../axios";

function LandingPage({ purpleBackground, mainBlackBackground }) {
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
                <Grid
                  item
                  xs={8}
                  key={blog.id}
                  sx={{ backgroundColor: "black" }}
                >
                  <Card sx={{ minWidth: 275, boxShadow: 3 }} variant="outlined">
                    <CardContent sx={{ backgroundColor: "#353435" }}>
                      <Typography
                        sx={{ fontSize: 14, color: "#a6a6a6" }}
                        color="text.secondary"
                        gutterBottom
                        align="right"
                      >
                        Posted by {blog.user}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "#FFFFFF" }}
                        align="center"
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ color: "#FFFFFF" }}
                        fontSize="1.2rem"
                      >
                        {blog.content}
                      </Typography>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                      >
                        {blog.tagblog_set.map((tag) => (
                          <Typography
                            key={tag.id}
                            color="text.secondary"
                            fontSize=".8rem"
                            sx={{ color: purpleBackground }}
                          >
                            #{tag.tag_title}&nbsp;&nbsp;
                          </Typography>
                        ))}
                      </Grid>
                    </CardContent>
                    {/* <CardActions> */}
                    {/* <Button size="small">Learn More</Button> */}
                    {/* </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default LandingPage;
