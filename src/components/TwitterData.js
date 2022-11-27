import React, { useState, useEffect } from "react";
import RedditCard from "./RedditCard";

import axiosInstance from "../axios";

import Grid from "@mui/material/Grid";

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
        {twitterDataState
          ? twitterDataState.map((redditPost) => (
              <RedditCard
                key={redditPost.title}
                redditPost={redditPost}
                purpleBackground={purpleBackground}
                typeOfData={'twitter'}
              />
            ))
          : null}
      </Grid>
    </div>
  );
}

export default RedditData;
