import React , {useState, useEffect}from "react";
import Typography from "@mui/material/Typography";

import axiosInstance from "../axios";

function History({ purpleBackground, mainBlackBackground }) {

  const userId = localStorage.getItem("userId")

  useEffect(() => {
    axiosInstance
      .get(`blog-api/user-history/${userId}`)
      .then((resp) => console.log(resp.data));
  }, [userId]);

  return (
    <div className="beneathAppBar">
      <Typography variant="h1" sx={{ color: "white" }}>
        History
      </Typography>
    </div>
  );
}

export default History;
