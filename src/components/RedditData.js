import React , {useState , useEffect} from 'react'
import RedditCard from './RedditCard'

import axiosInstance from "../axios";

// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import ClearIcon from "@mui/icons-material/Clear";
// import CardActionArea from "@mui/material/CardActionArea";

function RedditData({ purpleBackground }) {
  const [redditDataState, setRedditDataState] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("scrap-api/reddit-scrap")
      .then((resp) => setRedditDataState(resp.data));
  }, []);

  return (
    <div className="beneathAppBar">
      <Grid container justifyContent="center">
        {redditDataState.map((redditPost) => (
          <RedditCard
            redditPost={redditPost}
            purpleBackground={purpleBackground}
          />
        ))}
      </Grid>
    </div>
  );
}

export default RedditData