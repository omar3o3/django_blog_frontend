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

  // let firstName = localStorage.getItem("firstName");
  // let lastName = localStorage.getItem("lastName");
  // let email = localStorage.getItem("email");
  // let userName = localStorage.getItem("userName");
  const [firstNameState, setFirstNameState] = useState(
    localStorage.getItem("firstName")
  );
  const [lastNameState, setLastNameState] = useState(
    localStorage.getItem("lastName")
  );
  const [emailState, setEmailState] = useState(
    localStorage.getItem("email")
  );
  const [userNameState, setUserNameState] = useState(
    localStorage.getItem("userName")
  );

  const [loggedInState, setLoggedState] = useState(firstNameState);

  const purpleBackground = "#9c27b0";
  // const purpleBackground = "#A58EA5";

  return (
    <div className="App">
      <BrowserRouter>
        {/* <TestHeader2 purpleBackground={purpleBackground} /> */}
        {/* {firstName ? <TestHeader2 purpleBackground={purpleBackground} /> : null} */}
        {loggedInState ? (
          <TestHeader2 purpleBackground={purpleBackground} />
        ) : null}
        <Routes>
          <Route path="/register" element={<TestRegister />} />
          <Route
            path="/login"
            element={
              <TestLogin2
                purpleBackground={purpleBackground}
                setLoggedState={setLoggedState}
              />
            }
          />
          <Route
            path="/logout"
            element={<Logout setLoggedState={setLoggedState} />}
          />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
