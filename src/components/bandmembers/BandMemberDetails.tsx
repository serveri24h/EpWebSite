
import React from "react";
import "./BandMemberDetails.css"
import logo from './assets/logo.png';

export interface MemberConfig {
    n:number,
    responsibility:string,
    name:string;
    xOffset:number;
    yOffset:number;
    width:number;
    height:number;
}

export const MemberConfigList = [
    {
        n:0,
        name:"Severi",
        responsibility:"Composing, Lyrics, Vocals, Guitars, Keyboards, Synths",
        xOffset:-260,
        yOffset:-100,
        width:1200,
        height:600
    }, 
    {
        n:1,
        name:"Sandels",
        responsibility:"Guitars, Samples & Beats",
        xOffset:190,
        yOffset:80,
        width:400,
        height:300,
    }, 
    {
        n:2,
        responsibility:"Mixing",
        name:"Juuso",
        xOffset:175,
        yOffset:220,
        width:600,
        height:400,
    }, 
    {   
        n:3,
        name:"Joel",
        responsibility:"Bass, Backing Vocals",
        xOffset:-180,
        yOffset:145,
        width:600,
        height:400,
    }, 
    {
        n:4,
        name:"Matti",
        responsibility:"Guitars, Cello, Backing Vocals",
        xOffset:-100,
        yOffset:180,
        width:600,
        height:400,
    }, 
    {
        n:5,
        name:"Kalle",
        responsibility:"Drums",
        xOffset:-420,
        yOffset:70,
        width:800,
        height:600,
    }, 
    {
        n:6,
        name:"Leo",
        responsibility:"Production",
        xOffset:-100,
        yOffset:0,
        width:450,
        height:300,
    }, 
]


const BandMemberDetails:React.FC<{data:MemberConfig, onClose:any}> = ({data, onClose}) => {
    

    if (!data) {
        return null;
    }
    // Parse Arguments
    const name = data.name

    return (
        <div className="popup-page-overlay" onClick={onClose}>
            <div 
                className="popup-page-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{data.name}</h2>
                <h3>{data.responsibility}</h3>
                <img 
                    src={`${process.env.PUBLIC_URL}/bandmembers/${name.toLowerCase()}.jpg`} 
                    alt="Logo"
                    style={{ 
                        maxWidth: '100%',  // Scale the image to fit the width
                        height: 'auto',    // Maintain the aspect ratio
                    }} 
                />

            <div className="text-column">
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <button onClick={onClose}>✖</button>
          </div>
        </div>
    );
}

export default BandMemberDetails;