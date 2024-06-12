import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import '@/styles/pages.css'

const ContactInformation = () => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="contact">
                <div className="contact-item">
                    <FaEnvelope />
                    <p>Email: <a>paigauresh@gmail.com</a></p>
                </div>
                <div className="contact-item">
                    <FaLinkedin />
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/gaureshpai" target="_blank" rel="noopener noreferrer">gaureshpai</a></p>
                </div>
                <div className="contact-item">
                    <FaTwitter />
                    <p>Twitter: <a href="https://twitter.com/hseruag" target="_blank" rel="noopener noreferrer">@hseruag</a></p>
                </div>
                <div className="contact-item">
                    <FaInstagram />
                    <p>Instagram: <a href="https://www.instagram.com/hseruag" target="_blank" rel="noopener noreferrer">@hseruag</a></p>
                </div>
                <div className="contact-item">
                    <FaGithub />
                    <p>GitHub: <a href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer">@gaureshpai</a></p>
                </div>
                <div className="contact-item">
                    <FaYoutube />
                    <p>YouTube: <a href="https://www.youtube.com/@hseruag" target="_blank" rel="noopener noreferrer">@hseruag</a></p>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;
