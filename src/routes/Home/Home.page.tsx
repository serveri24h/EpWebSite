import React from 'react';
import HomeComponent, {AlbumArtComponent} from '../../components/homecomponent/HomeComponent';


const Home:React.FC = () => {
  return (
    <div className="App">
      <HomeComponent large={true}/>
      <AlbumArtComponent/>
    </div>
  );
}

export default Home;