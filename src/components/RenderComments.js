import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function RenderComments({ comment, user }) {
  return (
    // <Grid item xs={12}>
    //   <Card>
    //     <CardContent style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
    //       <Typography
    //         sx={{ fontSize: 14, color: "#a6a6a6" }}
    //         color="text.secondary"
    //         //   gutterBottom
    //         align="right"
    //         spacing={1}
    //       >
    //         Posted by {user}
    //       </Typography>
    //       <Typography
    //         variant="body2"
    //         paragraph
    //         // sx={{ color: "#FFFFFF" }}
    //         fontSize="1.2rem"
    //         style={{ margin: "0rem" }}
    //       >
    //         {comment.content}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    //   {/* </Typography> */}
    // </Grid>
    <Box sx={{ width: "100%" }} style={{borderColor:'red'}}>
    <Stack>
      <Typography
        sx={{ fontSize: 14, color: "#a6a6a6" }}
        color="text.secondary"
        //   gutterBottom
        align="right"
        spacing={1}
      >
        Posted by {user}
      </Typography>
      <Typography
        variant="body2"
        paragraph
        // sx={{ color: "#FFFFFF" }}
        fontSize="1.2rem"
        style={{ margin: "0rem" }}
      >
        {comment.content}
      </Typography>
    </Stack>
    </Box>
  );
}

export default RenderComments;
