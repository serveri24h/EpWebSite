import React from 'react';

const HeaderLink:React.FC<{url:string, title:string}> = ({url, title}) => {
    return (          
        <a href={url}>
            <div style={{
                paddingLeft: '15px',
                paddingRight: '15px',
                marginLeft:'5px',
                marginRight:'5px',
                backgroundColor:'black',
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
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:"100%",
            color:"#ffffff",
            justifyContent:'center'
        }}> 
            <HeaderLink url='/' title='Home' />
            <HeaderLink url='/songs' title='Music' />
            <HeaderLink url='/band' title='Band' />
        </div>
    )
}

export default PageHeader;
