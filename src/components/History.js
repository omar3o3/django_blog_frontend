import React , {useState, useEffect}from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BlogCard from './BlogCard'
import CircularProgress from "@mui/material/CircularProgress";

import axiosInstance from "../axios";


function History({ purpleBackground, mainBlackBackground }) {

  const [blogState , setBlogState] = useState(false)
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    axiosInstance
      .get(`blog-api/user-history/${parseInt(userId)}`)
      // .then((resp) => console.log(resp.data));
      .then((resp) => setBlogState(resp.data));
  }, [userId]);

  return (
    <div className="beneathAppBar">
      <Grid container justifyContent="center">
        {blogState ? (
          blogState.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <CircularProgress
            // color="secondary"
            size="5rem"
            sx={{ mt: "10rem", color: purpleBackground }}
          />
        )}
      </Grid>
    </div>
  );
}

export default History;
