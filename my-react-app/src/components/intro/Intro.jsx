import React from "react";

const Intro = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>{props.presentation}</h1>
            <h2>{props.proyect}</h2>
        </div>
    )
};

export default Intro;