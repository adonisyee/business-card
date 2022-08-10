import React from "react";
import "../css/styles.css";
import githubIcon from "../img/github_logo.png"
import linkedInIcon from "../img/linkedin_logo.png"

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_buttons">
                <a href="https://github.com/adonisyee" target="_blank" rel="noopener noreferrer"><img className="footer_button" src={githubIcon} alt="github icon"/></a>
                <a href="https://www.linkedin.com/in/adonisyee" target="_blank" rel="noopener noreferrer"><img className="footer_button" src={linkedInIcon} alt="linkedin icon"/></a>
            </div>
        </div>
    )
}
