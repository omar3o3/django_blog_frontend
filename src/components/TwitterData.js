import React, { useState, useEffect } from "react";
import ScrapCard from "./ScrapCard";

import axiosInstance from "../axios";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

function RedditData({ purpleBackground }) {
  const [twitterDataState, setTwitterDataState] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("scrap-api/twitter-scrap")
      .then((resp) => setTwitterDataState(resp.data));
  }, []);

  return (
    <div className="beneathAppBar">
      <Grid container justifyContent="center">
        {twitterDataState ? (
          twitterDataState.map((redditPost) => (
            <ScrapCard
              key={redditPost.title}
              redditPost={redditPost}
              purpleBackground={purpleBackground}
              typeOfData={"twitter"}
            />
          ))
        ) : (
          <CircularProgress
            // color="secondary"
            size="5rem"
            sx={{ mt: "10rem", color: "#1DA1F2" }}
          />
        )}
      </Grid>
    </div>
  );
}

export default RedditData;
