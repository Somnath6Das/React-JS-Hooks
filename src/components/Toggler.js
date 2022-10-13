import React from "react";

const Toggler = ({ toggler }) => {
    console.log("toggler Component");
    return (
        <div>
            <h4>Toggler = {toggler.toString()}</h4>
        </div>
    );
}
export default React.memo(Toggler);