import React from "react";

function Swing(props) {
    return (
    <label id="swing">
        <input type="checkbox" onChange={props.handleSwing}></input>
        Swing
    </label>
    )
}

export default Swing