import React from "react";
import "../css/styles.css";
import profilePhoto from "../img/IMG_3096.jpg"
import emailIcon from "../img/email.png"

export default function Info() {
    return (
        <div className="info_container">
            <img className="info_img" src={profilePhoto} alt="profile"/>
            <h1 className="info_name">Adonis Yee</h1>
            <h3 className="info_job-title">Software Developer</h3>
            <a className="info_website" href="#" target="_blank" rel="noopener noreferrer"><p>My Website</p></a>
            <div className="info_buttons">
                <a className="info_button" href="mailto:adonisyee@berkeley.edu" target="_blank" rel="noopener noreferrer">Email</a>
                <a className="info_button" href="https://github.com/adonisyee" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    )
}
