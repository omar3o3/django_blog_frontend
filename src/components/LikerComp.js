import React, { useEffect, useState } from "react";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import axiosInstance from "../axios";

function LikerComp({ blogId, purpleBackground }) {
  const [likeState, setLikeState] = useState(false);

  return (
    <CardActions>
      <Button sx={{ color: purpleBackground }} onClick={() => console.log(blogId)}>
        {likeState ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
      </Button>
      {/* <Button>
        <ThumbUpOffAltIcon />
      </Button> */}
    </CardActions>
  );
}

export default LikerComp;
