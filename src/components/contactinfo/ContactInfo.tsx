import React from 'react';
import ArtistLogo from '../artistlogo/ArtistLogo';
import './ContactInfo.css';


const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-card">
                <ArtistLogo size='small'/>
                <h2 className="contact-title"> Vastaamme </h2>
                <p className="contact-item">
                    <a href="puolenmetrinmetsaband@gmail.com" className="contact-link">puolenmetrinmetsaband@gmail.com</a>
                </p>
                <h3 className="find-us-title"> Soimme </h3>
                <div className="social-links">
                    <a href="https://youtube.com/@0.5m-metsa" target="_blank" rel="noreferrer" className="social-link">
                        YouTube
                    </a>
                    <span className="divider">|</span>
                    <a href="https://open.spotify.com/artist/2bWSquKoZggQO1MXOsTshL" target="_blank" rel="noreferrer" className="social-link">
                        Spotify
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
