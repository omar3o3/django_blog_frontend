import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import BlogCard from "./BlogCard";
import Account from "./Account";

import axiosInstance from "../axios";

function History({ purpleBackground, mainBlackBackground }) {
  const [blogState, setBlogState] = useState(false);
  const [noDataState, setNoDataState] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axiosInstance
      .get(`blog-api/user-history/${parseInt(userId)}`)
      .then((resp) => setBlogState(resp.data))
      .catch((err) => {
        console.log(err);
        setBlogState([]);
        setNoDataState(true);
      });
  }, [userId]);

  return (
    <div
      className="beneathAppBar"
      style={{ marginLeft: "2rem", marginRight: "2rem" }}
    >
      <Stack direction="column" spacing={2}>
        <Account />
        <Grid container justifyContent="center">
          <Stack
            direction="column"
            spacing={2}
            sx={{ width: "60%" }}
          >
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
      </Stack>
    </div>
  );
}

export default History;

//THIS IS THE SET UP FOR WHEN THE ACCOUNT AND POST HISTORY ARE SIDE BY SIDE

    // <div
    //   className="beneathAppBar"
    //   style={{ marginLeft: "2rem", marginRight: "2rem" }}
    // >
    //   {/* <Box sx={{ flexGrow: 1 }}> */}
    //   <Grid
    //     container
    //     direction="row"
    //     // justifyContent="space-evenly"
    //     // justifyContent="flex-end"
    //     // alignItems="flex-start"
    //     // columnSpacing={{ xs: 1}}
    //     // sx={{ flexGrow: 1 }}
    //     // columns={{ xs: 8}}
    //     spacing={1}
    //   >
    //     <Grid item xs>
    //       <Account />
    //     </Grid>
    //     <Grid item xs>
    //       <Stack
    //         direction="column"
    //         // justifyContent="flex-start"
    //         // alignItems="center"
    //         spacing={2}
    //         // sx={{ width: "60%" }}
    //         // sx={{ width: "40%" }}
    //       >
    //         {blogState ? (
    //           blogState.map((blog) => <BlogCard key={blog.id} blog={blog} />)
    //         ) : (
    //           <CircularProgress
    //             // color="secondary"
    //             size="5rem"
    //             sx={{ mt: "10rem", color: purpleBackground }}
    //           />
    //         )}
    //       </Stack>
    //       {noDataState ? (
    //         <Typography ariant="h1" style={{ color: "white" }}>
    //           No Previous Posts
    //         </Typography>
    //       ) : null}
    //     </Grid>
    //   </Grid>
    //   {/* </Box> */}
    // </div>;
