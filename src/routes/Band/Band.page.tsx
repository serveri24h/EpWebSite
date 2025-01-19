import React from 'react';
import BandMembers from '../../components/bandmembers/BandMembers';

const Band:React.FC = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:"100%",
            height:"100%",
            justifyContent: "center"
        }}>
            <BandMembers/>
        </div>
    )
}

export default Band;