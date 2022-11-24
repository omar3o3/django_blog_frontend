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
  const [prevCommentsState, setPrevCommentsState] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/blog-api/detailedBlogView/${blogId}`)
      .then((resp) => {
        setBlogState(resp.data);
        setPrevCommentsState(resp.data.comment_set);
      })
      .catch((error) => console.log(error));
  }, []);

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
        .then((resp) => resp.data)
        .then((data) => {
          let newComArr = [...prevCommentsState];
          newComArr.push(data);
          console.log(newComArr);
          setPrevCommentsState(newComArr);
        });
    }
  };

  const dateConverter = (input) => {
    let dateAndYearArr = input.split("T");
    let UTChour = dateAndYearArr[1].split(".")[0];
    let hour = parseInt(UTChour.split(":")[0]);
    let minute = UTChour.split(":")[1];
    if (hour > 12) {
      return `${hour - 12}:${minute}pm`;
    } else {
      return `${hour}:${minute}am`;
    }
  };

  const yearConverter = (input) => {
    let dateAndYearArr = input.split("T");
    let year = dateAndYearArr[0];
    let splitYear = year.split("-");
    return `${splitYear[1]}/${splitYear[2]}/${splitYear[0]}`;
  };

  //   console.log(prevCommentsState)

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
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{ fontSize: 14, color: "#a6a6a6" }}
                    color="text.secondary"
                    // gutterBottom
                    align="left"
                  >
                    @{blogState.user}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, color: "#a6a6a6" }}
                    color="text.secondary"
                    //   gutterBottom
                    align="right"
                  >
                    {dateConverter(blogState.nyc_time)}{" "}
                    {yearConverter(blogState.nyc_time)}
                  </Typography>
                </Grid>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#FFFFFF" }}
                  align="center"
                >
                  {blogState.title}
                </Typography>
                <div
                  style={{
                    background: purpleBackground,
                    margin: "auto",
                    height: "1px",
                    width: `${
                      blogState.title.length > 40 ? 40 : blogState.title.length
                    }rem`,
                    marginBottom: "1.5rem",
                  }}
                />
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ color: "#FFFFFF" }}
                  fontSize="1rem"
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
                  {prevCommentsState.map((comment) => (
                    <RenderComments
                      key={comment.content}
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
