import React,{forwardRef,useImperativeHandle, useState} from 'react'


const Child = forwardRef((props,ref) => {
   const [counter, setCounter] = useState(0);

    useImperativeHandle(ref,() => ({
        handleCounterChange,
    }))

   const handleCounterChange = () => {
    setCounter(counter + 1);
   };
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleCounterChange}>
            Increment Child</button>
    </div>
  )
}) 

export default Child