import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from "../axios";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function DetailedBlogView() {
  const location = useLocation();
  const blogId = location.state.blogId;
  //   const navigate = useNavigate()

  useEffect(() => {
    axiosInstance.get(`/blog-api/detailedBlogView/${blogId}`)
    .then((resp) => console.log(resp.data))
    .catch(error=>console.log(error));
  }, []);

  return (
    <div className="beneathAppBar">
      <Typography sx={{ color: "white" }}>hi</Typography>
      <Typography sx={{ color: "white" }}>{location.state.blogId}</Typography>
    </div>
  );
}

export default DetailedBlogView;
