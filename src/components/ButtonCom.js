import React from "react";

const ButtonCom =({ title, click }) => {
    console.log("button component");
    return <button onClick={click}>{title}</button>
};

export default React.memo(ButtonCom);