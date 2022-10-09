import React, { useState } from 'react'

const FuncComp = () => {
    const [ name, setName ] = useState("");
    
  return (
    <div>
        <h1>Functional Component short cut - Rafce</h1>
        <h4>{name}</h4>
        <button onClick={()=> setName("From Functional Component")}>Button</button>

    </div>
  )
}

export default FuncComp

