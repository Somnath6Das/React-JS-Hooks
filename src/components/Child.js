import React,{forwardRef,useImperativeHandle, useState} from 'react'
import useLogger from '../hooks/useLogger';


const Child = forwardRef((props,ref) => {
   const [counter, setCounter] = useState(0);

   useLogger(counter);

    useImperativeHandle(ref,() => ({
        handleCounterChange,
    }));

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
});

export default Child