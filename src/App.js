import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [django, setDjango] = useState([]);

  useEffect(() => {
    fetch("/users/get_users")
      .then((resp) => resp.json())
      .then((data) => setDjango(data));
  }, []);

  console.log(django);

  return (
    <div className="App">

    </div>
  );
}

export default App;
