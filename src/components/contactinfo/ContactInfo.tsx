import React from 'react';
import './ContactInfo.css'

const ContactInfo:React.FC = () => {
    return (
        <div className='contact-info-container'>
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p><strong>Email:</strong> seppo.artisti@example.com</p>
            </div>
            <h3>Find Us</h3>
            <p>
                <a href="https://youtube.com" target="_blank">YouTube</a> | 
                <a href="https://spotify.com" target="_blank">Spotify</a>
            </p>
        </div>
    )
}

export default ContactInfo;