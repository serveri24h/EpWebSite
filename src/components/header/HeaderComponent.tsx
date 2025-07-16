import React from 'react';
import './HeaderComponent.css';
import ArtistLogo from '../artistlogo/ArtistLogo';

const HeaderLink:React.FC<{url:string, title:string}> = ({url, title}) => {
    return (          
        <a href={url}>
            <div className='page-header-link'>
                <h1>{title}</h1>
            </div>
        </a>
    )
}

const PageHeader: React.FC = () => {
    return (
        <div className='header-container' >
            <div className='artist-logo-link'>
                <a href='/puolenmetrinmetsa/'>
                    <ArtistLogo size='mini'/>
                </a>
            </div>
            <div className='page-header'> 
                <HeaderLink url='/puolenmetrinmetsa/#/songs' title='Album' />
                <HeaderLink url='/puolenmetrinmetsa/#/band' title='Musicians' />
                <HeaderLink url='/puolenmetrinmetsa/#/contact' title='Contact' />
            </div>
        </div>
    )
}

export default PageHeader;
