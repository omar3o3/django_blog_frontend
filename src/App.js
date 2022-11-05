import React, { useState, useEffect } from "react";
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Register from "./components/Register";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
// import Header from "./components/Header";
// import TestLogin from "./components/TestLogin";
// import TestHeader from "./components/TestHeader";
import TestHeader2 from "./components/TestHeader2";
import TestLogin2 from "./components/TestLogin2";

function App() {

  // const [django, setDjango] = useState([]);

  // useEffect(() => {
  //   fetch("/users/get_users")
  //     .then((resp) => resp.json())
  //     .then((data) => setDjango(data));
  // }, []);

  // console.log(django);

  return (
    <div className="App">
      {/* <h1>hi</h1> */}
      <Router>
        <TestHeader2/>
        {/* <TestHeader/> */}
        {/* <Header/> */}
        <Switch>
          {/* <Route path="/register">
            <Register />
          </Route> */}
          <Route path="/login">
            <TestLogin2 />
          </Route>
          {/* <Route path="/logout">
            <Logout />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
