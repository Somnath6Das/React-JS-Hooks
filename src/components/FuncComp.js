import React, { useState, useEffect } from 'react'

const FuncComp = () => {
    function initialState () {
      console.log("State Initialization");
      return 0;
    }
   
    // useEffect call when the page is render first time.
    useEffect(() => {
    // setInterval(()=> {console.log("set interval from useEffect hook")}, 1000) 
    fetchUsers();
    },[]);

    const fetchUsers = async () => {
      try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await res.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
        <h1>Functional Component short cut - Rafce</h1>
    </div>
  )
}

export default FuncComp

