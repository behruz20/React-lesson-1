import "./footer.css"
import React from "react"

const Footer = () => {
    return <>
        <footer>
            <div className="logo">
                <img src="./src/assets/icons/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Work</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer