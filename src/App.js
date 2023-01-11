import React, { useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState([]);

  const fetchData = () => {
    axios.get('https://somnath6das.github.io/api/data.json').then((res) => {
      console.log(res);
      setValue(res.data);
    });
  }
  return (
    <>
      <button className="btn btn-primary" onClick={()=>fetchData()}>Fetch Data</button>
      {value.map((val) => { return (<h1 key={val.id}>{val.name}</h1> )})}
    </>
  );
}

export default App;
