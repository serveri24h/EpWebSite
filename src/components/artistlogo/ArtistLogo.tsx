import './ArtistLogo.css';

const ArtistLogo:React.FC<{size?:undefined | "large" | "small" | "mini"}> = ({size}) => {
    console.log(size,!!!size)
    return <div className='logo-holder'>
        <h1 className={`artist-logo-${!!!size ? "large" : size}`}>
            Puolen Metrin 
        </h1>
        <h1 className={`artist-logo-bottom-${!!!size ? "large" : size}`}>Metsā</h1> 
    </div>
}

export default ArtistLogo;