import React, { useEffect, useState } from "react";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function ShowComments({ blogId, purpleBackground }) {
  return (
    <CardActions>
      <Button sx={{ color: purpleBackground }}>Show Comments</Button>
    </CardActions>
  );
}

export default ShowComments;
