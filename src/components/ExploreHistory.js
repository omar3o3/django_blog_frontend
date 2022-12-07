import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useLocation } from "react-router-dom";

import BlogCard from "./BlogCard";
import Account from "./Account";

import axiosInstance from "../axios";

function ExploreHistory({ purpleBackground, mainBlackBackground }) {
  const [blogState, setBlogState] = useState(false);
  const [noDataState, setNoDataState] = useState(false);
  const location = useLocation();
  const blogUserName = location.state.username;

  //   useEffect(() => {
  //     axiosInstance
  //       .get(`blog-api/user-history/${parseInt(userId)}`)
  //       .then((resp) => setBlogState(resp.data))
  //       .catch((err) => {
  //         console.log(err);
  //         setBlogState([]);
  //         setNoDataState(true);
  //       });
  //   }, [userId]);
  console.log(blogUserName , 'from explore history');

  return (
    <div
      className="beneathAppBar"
      style={{ marginLeft: "2rem", marginRight: "2rem" }}
    >
      {/* <Stack direction="column" spacing={2}>
        <Account />
        <Grid container justifyContent="center">
          <Stack direction="column" spacing={2} sx={{ width: "60%" }}>
            {blogState ? (
              blogState.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <CircularProgress
                size="5rem"
                sx={{ mt: "10rem", color: purpleBackground }}
              />
            )}
          </Stack>
        </Grid>
        {noDataState ? (
          <Typography ariant="h1" style={{ color: "white" }}>
            No Previous Posts
          </Typography>
        ) : null}
      </Stack> */}
      <Typography>
        hello
      </Typography>
    </div>
  );
}

export default ExploreHistory;
