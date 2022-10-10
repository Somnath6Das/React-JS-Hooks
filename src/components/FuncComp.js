import React, { useState } from 'react'

const FuncComp = () => {
    function initialState () {
      console.log("State Initialization");
      return 0;
    }
    // arrow function in hooks doesn't rerender the state and can hold large amount of data.
    const [counter, setCounter ] = useState(()=> initialState());
    const [toggler, setToggler] = useState(false)

  return (
    <div>
        <h1>Functional Component short cut - Rafce</h1>
        <h2>{counter}</h2>
        <h1>{toggler.toString()}</h1>
        <button onClick={()=> setToggler(!toggler)}>click toggler</button>
        <br />
        <button onClick={()=> setCounter(counter + 1)}>+</button>

    </div>
  )
}

export default FuncComp

