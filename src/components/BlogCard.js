import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function BlogCard({ blog, purpleBackground, renderFromExplore }) {
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  const handleDetailedView = (e) => {
    // navigate("/post", { state: { blogId: blog.id } });
    // renderFromExplore
    //   ? navigate("/post", { state: { blogId: blog.id, renderFromExplore: renderFromExplore } })
    //   : navigate("/post", { state: { blogId: blog.id } });
    navigate("/post", {
      state: { blogId: blog.id, renderFromExplore: renderFromExplore },
    });
  };

  // console.log(renderFromExplore ? 'its true' : 'its false');

  const dateConverter = (input) => {
    let dateAndYearArr = input.split("T");
    let UTChour = dateAndYearArr[1].split(".")[0];
    let hour = parseInt(UTChour.split(":")[0]);
    let minute = UTChour.split(":")[1];
    if (hour > 12) {
      return `${hour - 12}:${minute}pm`;
    } else if (hour === 0) {
      return `12:${minute}am`;
    } else {
      return `${hour}:${minute}am`;
    }
  };

  const yearConverter = (input) => {
    let dateAndYearArr = input.split("T");
    let year = dateAndYearArr[0];
    let splitYear = year.split("-");
    return `${splitYear[1]}/${splitYear[2]}/${splitYear[0]}`;
  };

  const blogContentTrimmer = (content) => {
    if (content.length > 200) {
      return blog.content.slice(0, 200).trimEnd() + "...";
    } else {
      return content;
    }
  };

  return (
    <Grid item key={blog.id} sx={{ backgroundColor: "black" }}>
      <CardActionArea onClick={handleDetailedView}>
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
            >
              <Typography
                sx={{ fontSize: 14, color: "#a6a6a6" }}
                color="text.secondary"
                // gutterBottom
                align="left"
              >
                @{blog.user}
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "#a6a6a6" }}
                color="text.secondary"
                align="right"
              >
                {dateConverter(blog.nyc_time)} {yearConverter(blog.nyc_time)}
              </Typography>
            </Grid>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontFamily: "Arial",
              }}
              align="center"
            >
              {blog.title}
            </Typography>
            <div
              style={{
                background: purpleBackground,
                margin: "auto",
                height: "1.5px",
                width: `${blog.title.length > 40 ? 40 : blog.title.length}rem`,
                marginBottom: "1rem",
              }}
            />
            <Typography
              variant="body2"
              paragraph
              sx={{ color: "#FFFFFF", fontFamily: "BlinkMacSystemFont" }}
              fontSize="1rem"
            >
              {blogContentTrimmer(blog.content)}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {blog.tagblog_set.map((tag) => (
                <Typography
                  key={tag.tag_title}
                  color="text.secondary"
                  fontSize=".8rem"
                  sx={{
                    borderRadius: 1,
                    color: "white",
                    mr: "1rem",
                  }}
                  style={{ backgroundColor: "#607d8b" }}
                >
                  <div>&nbsp;&nbsp;#{tag.tag_title}&nbsp;&nbsp;</div>
                </Typography>
              ))}
            </Grid>
            <Box
              component="span"
              m={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            ></Box>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default BlogCard;
