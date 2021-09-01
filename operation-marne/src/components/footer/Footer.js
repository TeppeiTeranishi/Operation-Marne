import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Hetženauer</h1>
                <p>Based in Your City</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And lets get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Desing By Hetženauer
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/ademir-candelario-rosales/" target="blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/TeppeiTeranishi" target="blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://www.instagram.com/hetzenauer_9607/" target="blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer
