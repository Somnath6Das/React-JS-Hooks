import React from 'react'

const Header = () => {
    console.log('Header component');
  return (
    <div style={{border: "1px solid black", padding: "5px", marginBottom: "50px"}}>
        <h4>Header component</h4>
    </div>
  )
}

export default React.memo(Header);