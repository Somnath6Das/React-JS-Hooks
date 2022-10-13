import React from 'react';

const DisplayCounter =({ counter }) => {
    console.log("Display Counter Component");
    return (
        <div>
            <h4>Display Counter : {counter}</h4>
        </div>
    );
}

export default React.memo(DisplayCounter);