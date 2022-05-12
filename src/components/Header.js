import React from "react"
import "./Header.css"

const Header = (props) => {
    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-items">
                    <a><li>home</li> </a>
                    <a><li>blog</li></a>
                    <a><li>about</li></a>
                    <a><li>gallery</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Header