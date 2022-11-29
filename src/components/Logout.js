import React, { useState, useEffect } from "react";
import axiosInstance from "../axios";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function SignUp({ setLoggedState }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    const response = axiosInstance.post("users/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    axiosInstance.defaults.headers["Authorization"] = null;

    setLoggedState(false)

    navigate("/login");
  });
  return <div>Logout</div>;
}
