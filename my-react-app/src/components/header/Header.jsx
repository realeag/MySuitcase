import React from "react";

const Header = (props) => {
    return (
        <div className="propiedades p-4 m-4">
            <h1>{props.presentation}</h1>
            <h2>{props.proyect}</h2>
        </div>
    )
};

export default Header;