import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { FixedSizeList } from "react-window";

function UsersList() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const exampleArr = [
    "user one",
    "user two",
    "user three",
    "user four",
    "user five",
    "user six",
    "user seven",
    "user eight",
    "user nine",
    "user ten",
    "user eleven",
    "user twelve",
    "user thirteen",
    "user fourteen",
    "user fifteen",
    "user sixteen",
    "user seventeen",
    "user eighteen",
    "user nineteen",
    "usertwentyusertwentyone",
    "bbbbbbbbbbbbbbbbbbbbbbbbb",
  ];

  //   console.log(exampleArr.length);

  function renderRow(props) {
    // const { index, style } = props;

    return (
      //   <ListItem style={style} key={index} component="div" disablePadding>
      //     <ListItemButton>
      //       <ListItemText primary={`${index}`} />
      //     </ListItemButton>
      //   </ListItem>
      exampleArr.map((user) => (
        <ListItem component="div" disablePadding>
          <ListItemButton onClick={() => console.log(user)}>
            <ListItemText primary={`${user}`} />
          </ListItemButton>
        </ListItem>
      ))
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          marginRight: "1rem",
          marginBottom: "3rem",
          // maxHeight: "15%",
          // width: "100%",
          // overflow: "auto",
          // overflowY: "scroll",
        }}
      >
        <TextField></TextField>
        <Paper style={{ overflowY: "scroll", maxHeight: "20rem" }}>
          {exampleArr.map((user) => (
            <ListItem component="div" disablePadding>
              <ListItemButton onClick={() => console.log(user)}>
                <ListItemText primary={`${user}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default UsersList;
