import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";

function Account({ purpleBackground, mainBlackBackground, userIdState }) {
  const userId = localStorage.getItem("userId");
  const [userDataState , setUserDateState] = useState([])

  useEffect(() => {
    axiosInstance
      .get(`blog-api/account-info/${userId}`)
      .then((resp) => setUserDateState(resp.data));
      // .then((resp) => console.dir(resp.data));
  }, [userId]);
  return (
    <div>
      <Stack container spacing={2} alignItems="center">
        <Stack alignItems="center">
          <Typography variant="h4" sx={{ color: "white" }}>
            {userDataState.first_name} {userDataState.last_name}
          </Typography>
          <Typography variant="subtitle3" sx={{ color: "gray" }}>
            @{userDataState.user_name} {userDataState.email}
          </Typography>
        </Stack>
        <Typography variant="h5" sx={{ color: "white" }}>
          {userDataState.blog_count} blogs posted
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          {userDataState.comment_count} comments posted
        </Typography>
      </Stack>
    </div>
  );
}

export default Account;
