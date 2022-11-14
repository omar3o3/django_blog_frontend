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
import CreatePost from "./components/CreatePost";

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

    const [userIdState, setUserIdState] = useState(
      localStorage.getItem("userId")
    );

  const [loggedInState, setLoggedState] = useState(firstNameState);

  const purpleBackground = "#813772";
  const mainBlackBackground = "#000000";

  return (
    <div className="App">
      <BrowserRouter>
        {loggedInState ? (
          <TestHeader2
            purpleBackground={purpleBackground}
            mainBlackBackground={mainBlackBackground}
          />
        ) : null}
        <Routes>
          <Route path="/register" element={<TestRegister />} />
          <Route
            path="/login"
            element={
              <TestLogin2
                purpleBackground={purpleBackground}
                mainBlackBackground={mainBlackBackground}
                setLoggedState={setLoggedState}
                setFirstNameState={setFirstNameState}
                setLastNameState={setLastNameState}
                setEmailState={setEmailState}
                setUserNameState={setUserNameState}
                setUserIdState={setUserIdState}
              />
            }
          />
          <Route
            path="/logout"
            element={<Logout setLoggedState={setLoggedState} />}
          />
          <Route
            path="/home"
            element={
              <LandingPage
                purpleBackground={purpleBackground}
                mainBlackBackground={mainBlackBackground}
              />
            }
          />
          <Route
            path="/create-post"
            element={
              <CreatePost
                purpleBackground={purpleBackground}
                mainBlackBackground={mainBlackBackground}
                firstNameState={firstNameState}
                lastNameState={lastNameState}
                emailState={emailState}
                userNameState={userNameState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
