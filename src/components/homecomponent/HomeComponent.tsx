
import './HomeComponent.css';

const HomeComponent:React.FC<{large:boolean}> = ({large=true}) => {
    return <div className='logo-holder'>
        <h1 className={large ? "artist-logo": "artist-logo-small"}>
            Puolen Metrin 
        </h1>
        <h1 className={large ? "artist-logo": "artist-logo-small"}>Metsā</h1> 
    </div>
}

export default HomeComponent;