import React from 'react';
import './HeaderComponent.css';

const HeaderLink:React.FC<{url:string, title:string}> = ({url, title}) => {
    return (          
        <a href={url}>
            <div style={{
                paddingLeft: '15px',
                paddingRight: '15px',
                marginLeft:'5px',
                marginRight:'5px',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
            }}>
                <h1> {title} </h1>
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
