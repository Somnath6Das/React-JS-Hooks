import React from 'react'

const Footer = () => {
    console.log("Footer Component");
  return (
    <div style={{ border: "1px solid black", padding: "5px", marginTop: "100px"}}>
        <h4>Footer Component</h4>
    </div>
  )
}

export default React.memo(Footer);