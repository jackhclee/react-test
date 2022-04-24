import React, { useState } from "react";

const Banner = (props) => {
    let [msg, setMsg] = useState("Customer")
    const handleClick = () => {
        setMsg("John!!")
    }
    return (<div data-testid="test-1">
        <h1>{`${props.message} ${msg}`}</h1>
        <button onClick={handleClick}>Login</button>
        </div>)
}

export default Banner;