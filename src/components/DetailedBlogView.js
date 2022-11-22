import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../axios";
import RenderComments from "./RenderComments";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import CardActionArea from "@mui/material/CardActionArea";
import ClearIcon from "@mui/icons-material/Clear";

function DetailedBlogView({ purpleBackground }) {
  const location = useLocation();
  const blogId = location.state.blogId;
  //   const navigate = useNavigate()
  const [blogState, setBlogState] = useState(false);
  const [createState, setCreateState] = useState(false);
  const [commentState, setCommentState] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosInstance
      .get(`/blog-api/detailedBlogView/${blogId}`)
      .then((resp) => setBlogState(resp.data))
      //   .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error));
  }, []);

  //   console.log(blogState);
  const handleSubmit = (e) => {
    e.preventDefault();
    let intUserId = parseInt(userId);
    if (commentState.trim() !== "") {
      setCreateState(false);
      axiosInstance
        .post(`blog-api/create-comment`, {
          content: commentState,
          blog: blogId,
          user: intUserId,
        })
        .then((resp) => console.log(resp.data));
    }
  };

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
                      style={{ marginBottom: ".5rem" }}
                    >
                      #{tag.tag_title}&nbsp;&nbsp;
                    </Typography>
                  ))}
                </Grid>
                <Box
                  component="span"
                  m={1}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-start"
                >
                  <CardActions>
                    <Button
                      onClick={() => setCreateState((prevState) => !prevState)}
                    >
                      {createState ? <ClearIcon /> : "Comment"}
                    </Button>
                  </CardActions>
                </Box>
                {createState ? (
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid
                      component="span"
                      //   m={1}
                      display="flex"
                      justifyContent="center"
                      alignItems="flex-start"
                      container
                      spacing={3}
                    >
                      <Grid item xs={10}>
                        <TextField
                          className="textFieldComment"
                          multiline
                          placeholder="Your Comment..."
                          onChange={(e) => setCommentState(e.target.value)}
                          //   onSubmit={(e) => console.log(commentState)}
                          sx={{
                            "& .MuiInputBase-input": {
                              color: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "lightblue",
                            },
                            width: "100%",
                          }}
                          margin="normal"
                          fullWidth
                        />
                      </Grid>
                      {/* <Grid
                      component="span"
                      //   m={1}
                      display="flex"
                      justifyContent="center"
                      alignItems="flex-start"
                    > */}
                      <Grid item xs={2}>
                        <Button
                          type="submit"
                          // fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          style={{ background: purpleBackground }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                ) : null}
                <Grid container>
                  {blogState.comment_set.map((comment) => (
                    <RenderComments
                      comment={comment}
                      user={blogState.user}
                      purpleBackground={purpleBackground}
                    />
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
