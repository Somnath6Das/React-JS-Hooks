import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {
  // first call in DOM
  useLayoutEffect(() => {
    console.log('UseLayout Hook Call')
  },[]);

  // second call in DOM
  useEffect(() => {
    console.log("useEffect Hook Call")
  },[]);

  return (
    <div><h1>LayoutEffect Hook</h1></div>
  )
}

export default LayoutEffect