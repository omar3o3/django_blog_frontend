import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

function ExploreAccount({
  purpleBackground,
  mainBlackBackground,
  userIdState,
}) {
  const loggedInUserId = localStorage.getItem("userId");
  const loggedInUserName = localStorage.getItem("userName");
  const location = useLocation();
  const blogUserName = location.state.username;
  const [userDataState, setUserDateState] = useState([]);
  const [followedByUserState, setFollowedByUserState] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(
        `blog-api/view-other-account-info/${blogUserName}/${parseInt(
          loggedInUserId
        )}`
      )
      .then((resp) => {
        setUserDateState(resp.data);
        setFollowedByUserState(resp.data.followed_by_user);
      });
  }, [blogUserName, loggedInUserId]);

  const handleFollow = (e) => {
    axiosInstance
      .post("blog-api/create-following", {
        logged_in_user_name: loggedInUserName,
        target_user_name: blogUserName,
      })
      .then((resp) => {
        // console.log(resp.data);
        setFollowedByUserState((prev) => !prev);
      });
  };

  const handleUnfollow = (e) => {
    axiosInstance
      .delete(`blog-api/delete-following/${loggedInUserName}/${blogUserName}`)
      .then((resp) => {
        // console.log(resp.data);
        setFollowedByUserState((prev) => !prev);
      });
  };

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
        {loggedInUserName ===
        userDataState.user_name ? null : followedByUserState ? (
          <Button sx={{ color: "red" }} onClick={(e) => handleUnfollow(e)}>
            Unfollow
          </Button>
        ) : (
          <Button sx={{ color: "green" }} onClick={(e) => handleFollow(e)}>
            Follow
          </Button>
        )}
      </Stack>
    </div>
  );
}

export default ExploreAccount;
