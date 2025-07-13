import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import './Player.css';
import {ReactComponent as SpotifyLogo} from './Logos/spotify.svg';
import {ReactComponent as YouTubeLogo} from './Logos/youtube.svg';
import {SongOption, SongList} from './songs'


const YoutubeButton:React.FC<{setPlayer:any}> = ({setPlayer}) => {
    return (
        <g
            onClick={() => setPlayer('youtube')}
            className="youtube-player-option"
            style={{ cursor: 'pointer' }}  // Optional, to show pointer on hover
        >
            {/* Rectangle to cover center hole*/}
            <rect
                x="575"   
                y="160"   
                width="50"  
                height="35" 
                fill="transparent" 
                stroke="none" 
            />
            <YouTubeLogo
                x = '550'
                y = '140'
                stroke='black'
                width='100px'   
                height='75px'  
            />   
        </g>
    )
}

const SpotifyButton:React.FC<{setPlayer:any}> = ({setPlayer}) => {
    return (
        <g
            onClick={() => setPlayer('spotify')}
            className="spotify-player-option"
            style={{ cursor: 'pointer' }}  // Optional, to show pointer on hover
        >
            {/* Circle to cover center hole*/}
            <circle
                cx="730"   
                cy="180"
                r="25"   
                fill="transparent" 
                stroke="none" 
            />
            <SpotifyLogo
                x = '700'
                y = '150'
                stroke='black'
                width='60px'   
                height='60px'
            />
        </g>
    )
}


const SubRect:React.FC<{
    x:number, 
    y:number, 
    song:SongOption,
    isSelected:boolean, 
    setSong:Dispatch<SetStateAction<SongOption | null>>
}> = ({ x, y, song, isSelected, setSong }) => {

    const w = 200;
    const h = 40;

    const wDiff = 6;
    const hDiff = 8
    const selXDiff = isSelected?3:0;
    const selYDiff = isSelected?5:0;
    const tlTriangleDiff = 5


    return (
        <g className="song-option">
            {/* bl corner */}
            <rect
                x={x-wDiff}
                y={y+hDiff+20}
                width={w-20}
                height={h-20}
                fill="black"
                strokeWidth="1"
                rx="10"  
                ry="10"
            />
            {/* right side filler rectangle */}
            <rect
                x={x+50-wDiff}
                y={y+hDiff+20}
                width={w-50-7}
                height={h-20}
                fill="black"
                strokeWidth="1"
            />
            {/* top side filler rectangle */}
            <rect
                x={x-wDiff}
                y={y+hDiff+tlTriangleDiff}
                width={w}
                height={30-tlTriangleDiff}
                fill="black"
                strokeWidth="1"
            />
            <polygon points={`${x-wDiff},${y+hDiff+tlTriangleDiff} ${x+5},${y+1+selYDiff} ${x},${y+hDiff+tlTriangleDiff+1}`} fill="black" />
            <polygon points={`${x+w-wDiff-7},${y+h+hDiff} ${x+w-wDiff-8},${y+h} ${x+w-5},${y+h}`} fill="black" />
            <rect
                className="song-button"
                x={x-selXDiff}
                y={y+selYDiff}
                width={w}
                height={h}
                fill="var(--snow-white)"
                stroke="black"
                strokeWidth="1"
                rx="10"  
                ry="10"
                onClick={()=>{setSong(song)}}
            />
            {/* Text inside the rectangle */}
            <text
                style={{
                    pointerEvents:'none',
                }}
                x={x + (w / 2)-selXDiff*2} 
                y={y + (h / 2)+selXDiff*2} 
                fill="black"
                fontSize="14"
                textAnchor="middle"
                dominantBaseline="middle" 
                fontFamily="PlayerFont, sans-serif"
            >
            {song.name}
            </text>
        </g>
    );
};

const PlayerIframe:React.FC<{song:SongOption | null, player:string}> = ({song, player}) => {
    console.log(song, player)
    return (
        <div style={{ textAlign: 'center' }}>
        {song ? (
            player === 'youtube' ?
                <iframe 
                    width="560" height="315" src={song.youtubeUrl} 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}>
                </iframe> :
                <iframe 
                    src={song.spotifyUrl}  
                    width="560" height="315" allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>   
            ): 
                <svg width="560" height="315">
                    <rect x="0" y="0" width="560" height="315" fill="black" stroke="white" strokeWidth="2"        
                    rx="20"  
                    ry="20" />
                    <line x1="60" y1="315" x2="500" y2="0" stroke="white" strokeWidth="2" />
                </svg>
        }

      </div>
    )
}

const SvgWithHtml = () => {

    const [selectedSong, setSelectedSong] = useState<SongOption|null>(null); 
    const [selectedPlayer, setSelectedPlayer] = useState<string>('youtube'); 

    const setPlayer = (player:string) => {
        console.log(player)
        setSelectedPlayer(player);
    }

    return (
      <svg width="1200" height="800" style={{
      }}>
        <defs>
            <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="-5" dy="5" stdDeviation="25" flood-color="var(--deep-blue-shadow)" />
                <feDropShadow dx="5" dy="5" stdDeviation="25" flood-color="var(--deep-blue-shadow)" />
            </filter>
            <pattern id="imageBackground" patternUnits="userSpaceOnUse" width="1200" height="800">
                <image 
                    href={`${process.env.PUBLIC_URL}/backgrounds/gray-metal-texture.jpg`} 
                    width="1200" height="800" preserveAspectRatio="xMidYMid slice" 
                />
            </pattern>
        </defs>


        {/* Antennas */}
        <line x1="900" y1="25" x2="1005" y2="130" stroke="var(--dark-grey)" strokeWidth="6"/> 
        <circle cx="900" cy="25" r="3" stroke="var(--dark-grey)" strokeWidth="3"/> 

        {/* The Main svg */}
        <rect x="100" y="125" width="1000" height="450" fill="url(#imageBackground)" stroke="var(--dark-grey)" strokeWidth="1" filter="url(#drop-shadow)"     
            rx="20"  
            ry="20"
            
        />


        { /* Player Options */ }
        <YoutubeButton
            setPlayer={setPlayer}
        />


        <SpotifyButton
            setPlayer={setPlayer}
        />

        { /* Song List */}
        {
            SongList.map((song, i)=>(
                <SubRect 
                    x={150} 
                    y={165+65*i}
                    isSelected={song===selectedSong} 
                    song={song}
                    setSong={setSelectedSong}
                />
            ))
        }

        { /* Player as Iframe  */}
        <foreignObject x="350" y="225" width="750" height="400">
            {
                <PlayerIframe
                    song={selectedSong} 
                    player={selectedPlayer}
                /> 
            }
        </foreignObject>
      </svg>
    );
  };
  

const PlayerComponent:React.FC = () =>{
    return (
        <div style = {{ 
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center',
        }}>
            <SvgWithHtml/>
        </div>
    )
}

export default PlayerComponent;