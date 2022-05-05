import React from "react";
import "./project-1.css";
import mainImg from "./img/idriss.jpeg";
import emailImg from "./img/Email.svg";
import linkedinImg from "./img/linkedin.svg";
import githubImg from "./img/GitHub Icon.svg";
import twitterImg from "./img/Twitter Icon.svg";
import facebookImg from "./img/Facebook Icon.svg";
import instagramImg from "./img/Instagram Icon.svg";

export default function App() {
    return (
        <div className="card">
            <nav>
            <img className="mainImg" src={mainImg} alt="idriss img" />
            <h1>Idriss Atik</h1>
            <h3>Frontend Developer</h3>
            <p>IdrissAtik.website</p>
            <div className="btn">
                <a className="email-btn" href="#"> <img src={emailImg} alt="email" />Email </a>
                <a className="linkedin-btn" href="#"> <img src={linkedinImg} alt="linkedin" /> Linkedin</a>
            </div>    
            </nav>
            <main>
                <div className="about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="interests">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </main>
            <footer>
                <ul>
                    <li><a href="#"><img src={twitterImg} alt="twitter icon" /></a></li>
                    <li><a href="#"><img src={facebookImg} alt="facebook icon" /></a></li>
                    <li><a href="#"><img src={instagramImg} alt="instagram icon" /></a></li>
                    <li><a href="#"><img src={githubImg} alt="github icon" /></a></li>
                </ul>
            </footer>
        </div>
    );
}