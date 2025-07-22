
import './HomeComponent.css';
import ArtistLogo from '../artistlogo/ArtistLogo';

export const AlbumArtComponent:React.FC = ()=> {
    return <>
        <img src={`${process.env["PUBLIC_URL"]}/images/album_art/album_art.jpg`} 
            className='album-art-img'
            alt='album-art'
        />
    </>
}

const HomeComponent = () => {
    return <div className='App'>
        <ArtistLogo size='large'/>
        <AlbumArtComponent/>
    </div>
}

export default HomeComponent;