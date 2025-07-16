
import './HomeComponent.css';

const HomeComponent:React.FC<{large:boolean}> = ({large=true}) => {
    return <div className='logo-holder'>
        <h1 className={large ? "artist-logo": "artist-logo-small"}>
            Puolen Metrin 
        </h1>
        <h1 className={large ? "artist-logo-bottom": "artist-logo-bottom-small"}>Metsā</h1> 
    </div>
}

export const AlbumArtComponent:React.FC = ()=> {
    return <>
        <img src={`${process.env["PUBLIC_URL"]}/images/album_art/album_art.jpg`} 
            className='album-art-img'
        />
    </>
}

export default HomeComponent;