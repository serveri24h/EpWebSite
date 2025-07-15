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
                x={x+25}   
                y={y+17}  
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
                cx={x+30}   
                cy={y+30}
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


const SongButton:React.FC<{
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
    const f = fontSize || 15;

    const wDiff = 6;
    const hDiff = 8
    const selXDiff = isSelected?3:0;
    const selYDiff = isSelected?5:0;
    const tlTriangleDiff = 5

    return (
        <g className="song-option">
            <defs>
 
            </defs>
            {/* Song button pedastol */}
            <path
                fill="url(#buttonBackgroundSide)"
                strokeWidth="1"
                d={
                    `M ${x + 5},${y + 1 + selYDiff}
                    L ${x},${y + hDiff + tlTriangleDiff + 1}
                    L ${x - wDiff},${y + hDiff + tlTriangleDiff}
                    L ${x - wDiff},${y + hDiff + 30}
                    L ${x - wDiff},${y + hDiff + h - 10}
                    A 10,10 0 0 0 ${x - wDiff + 10},${y + hDiff + h}
                    L ${x + w - wDiff - 20},${y + hDiff + h}
                    L ${x + 50 - wDiff},${y + hDiff + h}
                    L ${x + w - wDiff - 7},${y + hDiff + h}
                    L ${x + w - 5},${y + h}
                    L ${x + w - wDiff - 8},${y + h}
                    L ${x + w - wDiff - 7},${y + hDiff + 20}
                    L ${x + 50 - wDiff},${y + hDiff + 20}
                    L ${x + 50 - wDiff},${y + hDiff + tlTriangleDiff}
                    L ${x - wDiff},${y + hDiff + tlTriangleDiff}
                    Z`
                }
                style={{filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.64))'}}
            />

            {/* Song Button */}
            <rect
                className="song-button"
                x={x-selXDiff}
                y={y+selYDiff}
                width={w}
                height={h}
                fill={"url(#buttonBackground)"}
                stroke={"url(#buttonBackground)"}
                strokeWidth="1"
                rx="10"  
                ry="10"
                onClick={()=>{setSong(song)}}
            />
            {/* Text inside the rectangle */}
            <text
                style={{
                    pointerEvents:'none',
                    fontFamily: 'Chivo, sans-serif',
                    textShadow: '2px 2px 3px #bad0daff, -2px -2px 5px #7c8081ff'
                }}
                x={x + (w / 2)-selXDiff*2} 
                y={y + (h / 2)+selXDiff*2} 
                fill={"#181818ff"}
                fontSize={`${f}`}
                textAnchor="middle"
                dominantBaseline="middle" 
                //fontFamily="san" //"PlayerFont, sans-serif"
            >
            {song.name}
            </text>
        </g>
    );
};

const PlayerIframe:React.FC<{
    song:SongOption | null, 
    player:string, 
    x:number,
    y:number,
    width:number, 
    height:number
}> = ({song, player, width, height, x=0, y=0}) => {
    return <>
        <defs>
            <clipPath id="roundedClip">
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={25}
                ry={25}
            />
            </clipPath>
        </defs>
        <g clipPath="url(#roundedClip)">
            <rect
                fill="black"
                x={x}
                y={y}
                width={width}
                height={height}
            />
            <polygon
                fill="url(#buttonBackgroundSide)"
                points={`${x},${y} ${x+width},${y} ${x},${y+height}`}
                style={{
                    transform: `translateX(${!!song ? -width : 0}px)`,
                    transition: "transform 1s ease-in-out",
                }}
            />
            <polygon
                fill="url(#buttonBackgroundSide)"
                points={`${x+width},${y} ${x+width},${y+height} ${x},${y+height}`}
                style={{
                    transform: `translateX(${!!song ? width : 0}px)`,
                    transition: "transform 1s ease-in-out",
                }}
            />
            { song && <foreignObject x={x} y={y} width={width} height={height}>
                {player === 'youtube' ?
                    <iframe 
                        className="iframe-spotify"
                        width={width} height={height} src={song.youtubeUrl} 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}>
                    </iframe> :
                    <iframe 
                        className="iframe-spotify"
                        title={song.name}
                        src={song.spotifyUrl}  
                        width={width} height={height} 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                    >
                    </iframe>
                }   
            </foreignObject> }
        </g>
    </>
}

interface PlayerViewProps {
    selectedSong:SongOption | null;
    setSelectedSong: Dispatch<SetStateAction<SongOption | null>>
    selectedPlayer:string;
    setPlayer: (player:string)=>void;
}

const SvgDefs: React.FC = ()=>{
    return <defs>
        <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="-5" dy="5" stdDeviation="25" flood-color="var(--deep-blue-shadow)" />
            <feDropShadow dx="5" dy="5" stdDeviation="25" flood-color="var(--deep-blue-shadow)" />
        </filter>
        <pattern id="imageBackground" patternUnits="userSpaceOnUse" width="1200" height="800">
            <image 
                href={`${process.env.PUBLIC_URL}/images/textures/gray-metal-texture.jpg`} 
                width="1200" height="800" preserveAspectRatio="xMidYMid slice" 
            />
        </pattern>
        <pattern id="buttonBackground" patternUnits="userSpaceOnUse" width="1200" height="800">
            <image 
                href={`${process.env.PUBLIC_URL}/images/textures/button-background.jpg`} 
                width="1200" height="800" preserveAspectRatio="xMidYMid slice" 
            />
        </pattern>
        <pattern id="buttonBackgroundSide" patternUnits="userSpaceOnUse" width="1200" height="800">
            <image 
                href={`${process.env.PUBLIC_URL}/images/textures/button-background-side.jpg`} 
                width="1200" height="800" preserveAspectRatio="xMidYMid slice" 
            />
        </pattern>
    </defs>
}

const DesktopView: React.FC<PlayerViewProps>= ({
    selectedSong, 
    setSelectedSong, 
    selectedPlayer, 
    setPlayer
}) => {

    return <svg width="1200" height="800">
        <SvgDefs/>

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
                <SongButton 
                    x={150} 
                    y={165+65*i}
                    isSelected={song===selectedSong} 
                    song={song}
                    setSong={setSelectedSong}
                />
            ))
        }

        { /* Player as Iframe  */}
            {
                <PlayerIframe
                    song={selectedSong} 
                    player={selectedPlayer}
                    x={410}
                    y={225}
                    width={600}
                    height={320}
                /> 
            }
    </svg>
}

const MobileView:React.FC<PlayerViewProps> = ({
    selectedSong, 
    setSelectedSong,  
    selectedPlayer, 
    setPlayer
}) => {



    return <>
        <svg width="400" height="800">
            <SvgDefs/>

            {/* Antennas */}
            <line x1="325" y1="160" x2="315" y2="100" stroke="var(--dark-grey)" strokeWidth="6"/> 
            <circle cx="315" cy="100" r="3" stroke="var(--dark-grey)" strokeWidth="3"/> 

            {/* The main component */}
            <rect x="50" y="150" width="300" height="500" fill="url(#imageBackground)" stroke="var(--dark-grey)" strokeWidth="1" filter="url(#drop-shadow)"     
                rx="20"  
                ry="20"
                
            />

            { SongList.map((song, i)=>(
                <SongButton 
                    x={72+(i%2)*140} 
                    y={250+Math.floor(i/2)*50}
                    width={125}
                    height={35}
                    fontSize={11}
                    isSelected={song===selectedSong} 
                    song={song}
                    setSong={setSelectedSong}
                />
            ))}

            { /* Player Options */ }
            <YoutubeButton
                setPlayer={setPlayer}
                x={100}
                y={162}
            />

            <SpotifyButton
                setPlayer={setPlayer}
                x={220}
                y={180}
            />
            <PlayerIframe
                song={selectedSong} 
                player={selectedPlayer}
                x={65}
                y={410}
                width={270}
                height={220}
            /> 
        </svg>
    </>
}

const PlayerComponent:React.FC = () => {

    const [selectedSong, setSelectedSong] = useState<SongOption|null>(null); 
    const [selectedPlayer, setSelectedPlayer] = useState<string>('youtube'); 

    const setPlayer = (player:string) => {
        setSelectedPlayer(player);
    }
    
    const isMobile = window.innerWidth <= 768;

    return (
        <div style = {{ 
            display:'flex', 
            flexDirection:'column', 
            justifyContent:'center',
        }}>{
            isMobile ? <MobileView
                selectedSong={selectedSong}
                setSelectedSong={setSelectedSong}
                selectedPlayer={selectedPlayer}
                setPlayer={setPlayer}
            /> : <DesktopView
                selectedSong={selectedSong}
                setSelectedSong={setSelectedSong}
                selectedPlayer={selectedPlayer}
                setPlayer={setPlayer}
            />
        }</div>
    );
};

export default PlayerComponent;