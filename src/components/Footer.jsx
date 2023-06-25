import React from "react";


const date = new Date();
const year = date.getFullYear();

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p className="footer">Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;