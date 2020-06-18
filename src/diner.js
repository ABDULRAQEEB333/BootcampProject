import React from "react";

function Diner (props) {
    return (
        <div>
           <h1> Today we are serving {props.dishName} </h1>
           <h1> Today we are serving {props.sweetdish} </h1>

        </div>
    )
}
export default Diner;