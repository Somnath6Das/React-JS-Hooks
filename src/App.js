import React, { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { PostProvider } from "./context/PostContext";

function App() {
  

  return (
    <PostProvider>
      <div className="App">
        <h1>Navbar Section</h1>
            <HomePage />
        <h1>Footer Section</h1>       
      </div>
    </PostProvider>
      
  );
}

export default App;
