import React from "react";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footerCopyright">
                <p>{props.copyright}</p>
            </div>
        </div>
    );
}


export default Footer;