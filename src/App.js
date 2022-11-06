import React, { useState, useEffect } from "react";
import './App.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useHistory,
//   Redirect,
// } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Register from "./components/Register";
import Logout from "./components/Logout";
import TestHeader2 from "./components/TestHeader2";
import TestLogin2 from "./components/TestLogin2";
import TestRegister from "./components/TestRegister";
import LandingPage from "./components/LandingPage";

function App() {

  // let history = useHistory();

  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");
  let email = localStorage.getItem("email");
  let userName = localStorage.getItem("userName");


  const purpleBackground = "#9c27b0";

  // if (!firstName) return <TestLogin2/>;
  // useEffect(() => {
  //   if(firstName) {
  //     // history.push("/home");
  //     <Router>
  //       <Redirect to="/home" />;
  //     </Router>
  //   }
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <TestHeader2 purpleBackground={purpleBackground} />
        {/* {firstName ? <TestHeader2 purpleBackground={purpleBackground} /> : null} */}
        <Routes>
          <Route path="/register" element={<TestRegister />} />
          <Route path="/login" element={<TestLogin2 />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
