import React from 'react';
import PlayerComponent from '../../components/player/Player';

const Songs:React.FC = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:"100%",
            height:"100%",
            justifyContent: "center"
        }}>
            <PlayerComponent/>
        </div>
    )
}

export default Songs;