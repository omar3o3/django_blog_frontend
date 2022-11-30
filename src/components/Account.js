import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import Typography from "@mui/material/Typography";

function Account({ purpleBackground, mainBlackBackground, userIdState }) {
  const userId = localStorage.getItem("userId");
  const [userDataState , setUserDateState] = useState([])

  useEffect(() => {
    axiosInstance
      .get(`blog-api/account-info/${userId}`)
        .then(resp => console.log(resp.data));
      // .then((resp) => console.dir(resp.data));
  }, [userId]);
  return (
    <div className="beneathAppBar">
      <Typography variant="h3" sx={{ color: "white" }}>
        Account
      </Typography>
    </div>
  );
}

export default Account;
