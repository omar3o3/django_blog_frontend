import React , {useState , useEffect} from 'react'
import RedditCard from './RedditCard'

import axiosInstance from "../axios";

import Grid from "@mui/material/Grid";

function RedditData({ purpleBackground }) {
  const [redditDataState, setRedditDataState] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("scrap-api/reddit-scrap")
      .then((resp) => setRedditDataState(resp.data));
  }, []);

  return (
    <div className="beneathAppBar">
      <Grid container justifyContent="center">
        {redditDataState
          ? redditDataState.map((redditPost) => (
              <RedditCard
                key={redditPost.title}
                redditPost={redditPost}
                purpleBackground={purpleBackground}
                typeOfData={"reddit"}
              />
            ))
          : null}
      </Grid>
    </div>
  );
}

export default RedditData