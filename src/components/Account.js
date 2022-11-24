import React from "react";
import Typography from "@mui/material/Typography";

function Account({ purpleBackground, mainBlackBackground, userIdState }) {
  return (
    <div className="beneathAppBar">
      <Typography variant="h1" sx={{ color: "white" }}>
        Account
      </Typography>
    </div>
  );
}

export default Account;
