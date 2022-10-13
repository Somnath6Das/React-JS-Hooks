import React, { useEffect, useRef } from 'react'

const FuncComp = () => {
  
    const inputRef = useRef('Somnath');
    console.log(inputRef);
    useEffect(() => {
      inputRef.current.focus();
    })


  return (
    <div>
     <input type="text" ref={inputRef} onChange={()=> console.log(inputRef.current.value)}/>
    </div>
  )
}

export default FuncComp

