import React from 'react'
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function RedditCard({ redditPost, purpleBackground }) {
  const navigate = useNavigate();

  const handleRedditView = () => {
    navigate(redditPost.link);
  };

  console.log(redditPost.link);

  return (
    <Grid item xs={8} key={redditPost.title} sx={{ backgroundColor: "black" }}>
      {/* <CardActionArea onClick={handleRedditView}> */}
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 3,
          backgroundColor: "#353435",
        }}
        variant="outlined"
      >
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          ></Grid>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "#FFFFFF" }}
            align="center"
            // color="secondary"
          >
            <Box sx={{mt:2}}>
              <Link
                href={"https://" + redditPost.link}
                target="_blank"
                rel="noreferrer"
                underline="hover"
                // color="secondary"
                sx={{color: "white"}}
              >
                {redditPost.title}
              </Link>
            </Box>
          </Typography>
          {/* <div
            style={{
              background: purpleBackground,
              margin: "auto",
              height: "1px",
              width: `${
                redditPost.title.length > 40 ? 40 : redditPost.title.length
              }rem`,
              marginBottom: "1rem",
            }}
          /> */}
          {/* <Typography
              variant="body2"
              paragraph
              sx={{ color: "#FFFFFF" }}
              fontSize="1rem"
            >
              {redditPost.title}
            </Typography> */}
        </CardContent>
      </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}

export default RedditCard