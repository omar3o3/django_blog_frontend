import React, { useState } from "react";
import axiosInstance from "../axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

const theme = createTheme();

export default function SignUp({ purpleBackground, setLoggedState }) {
  // const history = useHistory();
  const navigate = useNavigate();

  const initialFormData = Object.freeze({
    email: "",
    userName: "",
    password: "",
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    axiosInstance
      .post(`users/create-user`, {
        email: formData.email,
        user_name: formData.userName,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
      })
      .then((res) => {
        // history.push("/login");
        // const decodedData = jwt_decode(res.data.access);
        // console.log('res' , res)
        // console.log('res.data' , res.data)
        // console.log('decodedData' , decodedData)
        // localStorage.setItem("firstName", decodedData.firstName);
        // localStorage.setItem("lastName", decodedData.lastName);
        // localStorage.setItem("email", decodedData.email);
        // localStorage.setItem("userName", decodedData.userName);
        // localStorage.setItem("userId", decodedData.user_id);
        // localStorage.setItem("access_token", res.data.access);
        // localStorage.setItem("refresh_token", res.data.refresh);
        // axiosInstance.defaults.headers["Authorization"] =
        //   "JWT " + localStorage.getItem("access_token");
        // localStorage.setItem("firstName", res.data.first_name);
        // localStorage.setItem("lastName", res.data.last_name);
        // localStorage.setItem("email", res.data.email);
        // localStorage.setItem("userName", res.data.user_name);
        // localStorage.setItem("userId", res.data.user_id);
        // localStorage.setItem("access_token", res.data.access);
        // localStorage.setItem("refresh_token", res.data.refresh);
        // axiosInstance.defaults.headers["Authorization"] =
        //   "JWT " + localStorage.getItem("access_token");
        // navigate("/home");
        // setLoggedState(localStorage.getItem("firstName", res.data.first_name));
        // setLoggedState(localStorage.getItem("firstName"));
        // console.log(res);
        // console.log(res.data);
        // navigate("/home");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="user name"
                  name="userName"
                  // autoComplete="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: purpleBackground }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2" underline="hover">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
