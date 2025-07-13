import React from 'react';
import './HeaderComponent.css';

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
        <div className='page-header'> 
            <HeaderLink url='/puolenmetrinmetsa/#/songs' title='Music' />
            <HeaderLink url='/puolenmetrinmetsa/#/band' title='Band' />
            <HeaderLink url='/puolenmetrinmetsa/#/contact' title='Contact' />
        </div>
    )
}

export default PageHeader;
