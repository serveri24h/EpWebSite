import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import './Player.css';
import {ReactComponent as SpotifyLogo} from './Logos/spotify.svg';
import {ReactComponent as YouTubeLogo} from './Logos/youtube.svg';
import {SongOption, SongList} from './songs'



const SubRect:React.FC<{x:number, y:number, song:SongOption, setSong:Dispatch<SetStateAction<SongOption | null>>}> = ({ x, y, song, setSong }) => {

    const w = 200;
    const h = 40;

    return (
      <g className="song-option">
        {/* Rectangle */}
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          fill="lightblue"
          stroke="black"
          strokeWidth="2"
          rx="10"  
          ry="10"
          onClick={()=>{setSong(song)}}
        />
  
        {/* Text inside the rectangle */}
        <text
          x={x + w / 2} // Center the text horizontally
          y={y + h / 2} // Center the text vertically
          fill="black"
          fontSize="14"
          textAnchor="middle" // Align text to the center
          dominantBaseline="middle" // Align text to the middle of the vertical axis
        >
          {song.name}
        </text>
      </g>
    );
};

const PlayerIframe:React.FC<{song:SongOption | null, player:string}> = ({song, player}) => {
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
                    <line x1="60" y1="315" x2="500" y2="0" stroke="white" stroke-width="2" />
                </svg>
        }

      </div>
    )
}

const SvgWithHtml = () => {

    const [selectedSong, setSelectedSong] = useState<SongOption|null>(null); 
    const [selectedPlayer, setSelectedPlayer] = useState<string>('youtube'); 

    const handleButtonClick = () => {
        alert("HALÖOOO");
    }

    const setPlayer = (player:string) => {
        setSelectedPlayer(player);
    }

    return (
      <svg width="1200" height="800" style={{ border: '1px solid black' }}>
        {/* SVG Circle */}
        <rect x="50" y="50" width="1100" height="600" fill="black" stroke="black" strokeWidth="2"        
        rx="20"  
        ry="20" />
        <circle 
            cx="100"  
            cy="100"  
            r="30"    
            fill="orange"
            stroke="black"
            strokeWidth="2"
            style={{ cursor: 'pointer' }}  
            onClick={handleButtonClick}    
        />

        { /* Player Options */ }
        <YouTubeLogo
            className="youtube-player-option"
            x = '550'
            y = '75'
            width='100px'   
            height='75px'  
            onClick={()=>setPlayer('youtube')}
        />
        <SpotifyLogo
            className="spotify-player-option"
            x = '700'
            y = '75'
            width='75px'   
            height='75px'
            onClick={()=>setPlayer('spotify')}
        />

        { /* Song List */}
        {
            SongList.map((song, i)=>(
                <SubRect 
                    x={100} 
                    y={150+75*i} 
                    song={song}
                    setSong={setSelectedSong}
                />
            ))
        }

        { /* Player as Iframe         */}
        <foreignObject x="350" y="200" width="750" height="500">
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
        <div style = {{ display:'flex', flexDirection:'column', justifyContent:'center', height:'90%'}}>
            <SvgWithHtml/>
        </div>
    )
}

export default PlayerComponent;