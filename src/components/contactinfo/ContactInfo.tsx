import React from 'react';
import HomeComponent from '../homecomponent/HomeComponent';
import './ContactInfo.css';


const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-card">
                <HomeComponent large={false}/>
                <h2 className="contact-title"> Vastaamme </h2>
                <p className="contact-item">
                    <a href="puolenmetrinmetsa@gmail.com" className="contact-link">puolenmetrinmetsa@gmail.com</a>
                </p>
                <h3 className="find-us-title"> Soimme </h3>
                <div className="social-links">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link">
                        YouTube
                    </a>
                    <span className="divider">|</span>
                    <a href="https://spotify.com" target="_blank" rel="noreferrer" className="social-link">
                        Spotify
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
