import React from 'react'
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";


function RedditCard({ redditPost, purpleBackground, typeOfData }) {
  const navigate = useNavigate();

  //   console.log(redditPost.link);

  return (
    <Grid item xs={8} key={redditPost.title} sx={{ backgroundColor: "black" }}>
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
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ mt: 2 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "#FFFFFF" }}
                align="center"
              >
                {redditPost.title}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  href={
                    typeOfData === "reddit"
                      ? 
                        redditPost.link
                      : redditPost.link
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {typeOfData === "reddit" ? (
                    <RedditIcon sx={{ color: "#FF4500" }} />
                  ) : (
                    <TwitterIcon sx={{ color: "#1DA1F2" }} />
                  )}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default RedditCard