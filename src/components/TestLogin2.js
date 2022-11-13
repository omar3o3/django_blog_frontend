import React, { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import signInImage from "../images/signInImage.jpg";

import jwt_decode from "jwt-decode";

const theme = createTheme();

export default function SignInSide({
  purpleBackground,
  setLoggedState,
  mainBlackBackground,
  setFirstNameState,
  setLastNameState,
  setEmailState,
  setUserNameState,
}) {
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`users/token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        const decodedData = jwt_decode(res.data.access);
        // console.log(decodedData.firstName);
        // console.log(res.data.access);

        setLoggedState(true);

        localStorage.setItem("firstName", decodedData.firstName);
        localStorage.setItem("lastName", decodedData.lastName);
        localStorage.setItem("email", decodedData.email);
        localStorage.setItem("userName", decodedData.userName);

        setFirstNameState(localStorage.getItem("firstName"));
        setLastNameState(localStorage.getItem("lastName"));
        setEmailState(localStorage.getItem("email"));
        setUserNameState(localStorage.getItem("userName"));

        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        navigate("/home");
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${signInImage})`,
            // backgroundColor: (t) =>
            //   t.palette.mode === "light"
            //     ? t.palette.grey[50]
            //     : t.palette.grey[900],
            // backgroundColor: 'black',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "black" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // backgroundColor: 'black',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: purpleBackground }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "white" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, color: "white" }}
            >
              <TextField
                sx={{
                  backgroundColor: "white",
                  color: "white",
                  mt: 2,
                  px: 1,
                  py: 1,
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="&nbsp;&nbsp;Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                color="secondary"
                variant="standard"
              />
              <TextField
                sx={{
                  backgroundColor: "white",
                  color: "white",
                  mt: 2,
                  px: 1,
                  py: 1,
                }}
                variant="standard"
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="&nbsp;&nbsp;Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: purpleBackground }}
              >
                Sign In
              </Button>
              <Grid container display="flex" justifyContent="center">
                <Grid item>
                  <Link
                    align="center"
                    href="/register"
                    variant="body2"
                    sx={{ color: "light blue" }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
