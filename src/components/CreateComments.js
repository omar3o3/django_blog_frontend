import React, { useEffect, useState } from "react";

import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { shadeTextFieldStylesHook } from "@mui-treasury/styles/textField/shade";
import CardContent from "@mui/material/CardContent";

function CreateComments({ blogId, purpleBackground }) {
  const [createState, setCreateState] = useState(false);

  // const inputBaseStyles = shadeTextFieldStylesHook.useInputBase();
  // const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel();

  return (
    <>
      {createState ? (
          <TextField
            label={"Order Name"}
            placeholder={"Placeholder"}
            margin={"normal"}
            required
          />
      ) : null}
      <CardActions>
        <Button
          sx={{ color: purpleBackground }}
          onClick={() => setCreateState((prevState) => !prevState)}
        >
          Comment
        </Button>
      </CardActions>
    </>
  );
}

export default CreateComments;
