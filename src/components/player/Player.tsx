import React, { Dispatch, SetStateAction, useState } from "react"
import './Player.css';
import {ReactComponent as SpotifyLogo} from './Logos/spotify.svg';
import {ReactComponent as YouTubeLogo} from './Logos/youtube.svg';
import {SongOption, SongList} from './songs'


const YoutubeButton:React.FC<{setPlayer:any, x:number, y:number}> = ({setPlayer, x, y}) => {
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
                x = {x}
                y = {y}
                stroke='black'
                width='100px'   
                height='75px'  
            />   
        </g>
    )
}

const SpotifyButton:React.FC<{setPlayer:any,x:number, y:number}> = ({setPlayer,x,y}) => {
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
                x = {x}
                y = {y}
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
    width?:number,
    height?:number,
    fontSize?:number,
    song:SongOption,
    isSelected:boolean, 
    setSong:Dispatch<SetStateAction<SongOption | null>>
}> = ({ x, y, width, height, fontSize, song, isSelected, setSong }) => {

    const w = width || 200;
    const h = height || 40;
    const f = fontSize || 14;

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
                fontSize={`${f}`}
                textAnchor="middle"
                dominantBaseline="middle" 
                fontFamily="PlayerFont, sans-serif"
            >
            {song.name}
            </text>
        </g>
    );
};

const PlayerIframe:React.FC<{song:SongOption | null, player:string, width:number, height:number}> = ({song, player, width, height}) => {
    return (
        <div style={{ textAlign: 'center' }}>
        {song ? (
            player === 'youtube' ?
                <iframe 
                    width={width} height={height} src={song.youtubeUrl} 
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}>
                </iframe> :
                <iframe 
                    title={song.name}
                    src={song.spotifyUrl}  
                    width={width} height={height} allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>   
            ): 
                <svg width={width} height={height}>
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
      <svg width="1200" height="800">
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
            x = {550}
            y = {140}
        />


        <SpotifyButton
            setPlayer={setPlayer}
            x={700}
            y={150}
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
                    width={560}
                    height={350}
                /> 
            }
        </foreignObject>
      </svg>
    );
  };


const MobileView:React.FC = () => {

    const [selectedSong, setSelectedSong] = useState<SongOption|null>(null); 
    const [selectedPlayer, setSelectedPlayer] = useState<string>('youtube'); 

    const setPlayer = (player:string) => {
        console.log(player)
        setSelectedPlayer(player);
    }

    return <>
        <svg width="400" height="800">
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

            <rect x="50" y="100" width="300" height="500" fill="url(#imageBackground)" stroke="var(--dark-grey)" strokeWidth="1" filter="url(#drop-shadow)"     
                rx="20"  
                ry="20"
                
            />

                    {
            SongList.map((song, i)=>(
                <SubRect 
                    x={72+(i%2)*140} 
                    y={200+Math.floor(i/2)*50}
                    width={125}
                    height={35}
                    fontSize={11}
                    isSelected={song===selectedSong} 
                    song={song}
                    setSong={setSelectedSong}
                />
            ))
        }

        { /* Player Options */ }
        <YoutubeButton
            setPlayer={setPlayer}
            x={100}
            y={112}
        />

        <SpotifyButton
            setPlayer={setPlayer}
            x={220}
            y={120}
        />
        
        <foreignObject x="75" y="360" width="250" height="220">
            {
                <PlayerIframe
                    song={selectedSong} 
                    player={selectedPlayer}
                    width={250}
                    height={220}
                /> 
            }
        </foreignObject>


        </svg>
    </>
}

const PlayerComponent:React.FC = () =>{

    const isMobile = window.innerWidth <= 768;

    return (
        <div style = {{ 
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center',
        }}>
            { isMobile ?  <MobileView/>  : <SvgWithHtml/>}
        </div>
    )
}

export default PlayerComponent;