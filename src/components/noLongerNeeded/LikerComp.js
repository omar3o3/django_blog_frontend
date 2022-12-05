import React, { useEffect, useState } from "react";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import axiosInstance from "../../axios";

function LikerComp({ blogId, hotPink, purpleBackground }) {
  const [likeState, setLikeState] = useState(false);

  const handleLike = () => {
    console.log(blogId);
    setLikeState((prevState) => !prevState);
  };

  return (
    <CardActions>
      <Button sx={{ color: hotPink }} onClick={() => handleLike()}>
        {likeState ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
      </Button>
    </CardActions>
  );
}

export default LikerComp;
