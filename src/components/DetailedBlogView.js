import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../axios";
import RenderComments from './RenderComments'

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import CardActionArea from "@mui/material/CardActionArea";

function DetailedBlogView({ purpleBackground }) {
  const location = useLocation();
  const blogId = location.state.blogId;
  //   const navigate = useNavigate()
  const [blogState, setBlogState] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/blog-api/detailedBlogView/${blogId}`)
      .then((resp) => setBlogState(resp.data))
      //   .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(blogState);

  return (
    <div className="beneathAppBar">
      {blogState ? (
        <Grid container justifyContent="center">
          <Grid item xs={8} sx={{ backgroundColor: "black" }}>
            <Card
              sx={{
                minWidth: 275,
                boxShadow: 3,
                backgroundColor: "#353435",
              }}
              variant="outlined"
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, color: "#a6a6a6" }}
                  color="text.secondary"
                  //   gutterBottom
                  align="right"
                >
                  Posted by {blogState.user}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFFFFF" }}
                  align="center"
                >
                  {blogState.title}
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ color: "#FFFFFF" }}
                  fontSize="1.2rem"
                >
                  {blogState.content}
                </Typography>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  {blogState.tagblog_set.map((tag) => (
                    <Typography
                      key={tag.tag_title}
                      color="text.secondary"
                      fontSize=".8rem"
                      sx={{ color: purpleBackground }}
                      style={{marginBottom:".5rem"}}
                    >
                      #{tag.tag_title}&nbsp;&nbsp;
                    </Typography>
                  ))}
                </Grid>
                <Grid container>
                  {blogState.comment_set.map((comment) => (
                    <RenderComments comment={comment} user={blogState.user}/>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}

export default DetailedBlogView;
