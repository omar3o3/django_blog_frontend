import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";

import LikerComp from "./LikerComp";
import CreateComments from "./CreateComments";
// import ShowComments from "./ShowComments";

function BlogCard({ blog, purpleBackground, userIdState }) {
  const [createState, setCreateState] = useState(false);
  const [commentState, setCommentState] = useState("");
  //   console.log(commentState);
  const userId = localStorage.getItem("userId");

  const hotPink = "#f20256";

  const handleSubmit = (e) => {
    e.preventDefault();
    let intUserId = parseInt(userId);
    if (commentState.trim() !== "") {
      setCreateState(false);
      axiosInstance.post(`blog-api/create-comment`, {
        content: commentState,
        blog: blog.id,
        user: intUserId,
      }).then(resp => console.log(resp.data));
    }
  };

  return (
    <Grid item xs={8} key={blog.id} sx={{ backgroundColor: "black" }}>
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
                key={tag.tag_title}
                color="text.secondary"
                fontSize=".8rem"
                sx={{ color: purpleBackground }}
              >
                #{tag.tag_title}&nbsp;&nbsp;
              </Typography>
            ))}
          </Grid>
          <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <LikerComp
              key={blog.id}
              blogId={blog.id}
              purpleBackground={purpleBackground}
              hotPink={hotPink}
            />
            <CardActions>
              <Button onClick={() => setCreateState((prevState) => !prevState)}>
                {createState ? <ClearIcon /> : "Comment"}
              </Button>
            </CardActions>
          </Box>
          {createState ? (
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                className="textFieldComment"
                placeholder="Your Comment..."
                onChange={(e) => setCommentState(e.target.value)}
                onSubmit={(e) => console.log(commentState)}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "lightblue",
                  },
                }}
                margin="normal"
                fullWidth
              />
            </Box>
          ) : null}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BlogCard;

// "& .MuiOutlinedInput-input": {
//   // backgroundColor: "red",
//   // color: "red"
//   // borderColor: "red",
// },
// "& .MuiOutlinedInput-notchedOutline:focused": {
//   borderColor: "lightblue",
// },
// "& .Mui-focused": {
//   borderColor: "yellow !important",
// },
// "& .notchedOutline": {
//   borderColor: "purple !important",
// },
// "& .MuiInputBase": {
//   "& .Mui-focused": {
//     borderColor: "lightblue",
//   },
// },
