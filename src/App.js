import React, { useState, useEffect } from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

// import Register from "./components/Register";
import Logout from "./components/Logout";
import TestHeader2 from "./components/TestHeader2";
import TestLogin2 from "./components/TestLogin2";
import TestRegister from "./components/TestRegister";
import LandingPage from "./components/LandingPage";

function App() {

  let history = useHistory();

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
      <Router>
        {firstName ? <TestHeader2 purpleBackground={purpleBackground} /> : null}
        <Switch>
        {firstName ? (
          <Redirect from={["/register", "/login"]} to="/home" />
        ) : null}
          <Route exact path="/register">
            <TestRegister purpleBackground={purpleBackground} />
          </Route>
          <Route exact path="/login">
            <TestLogin2 purpleBackground={purpleBackground} />
          </Route>
          <Route exact path="/logout">
            <Logout purpleBackground={purpleBackground} />
          </Route>
          <Route exact path="/home">
            <LandingPage purpleBackground={purpleBackground} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
