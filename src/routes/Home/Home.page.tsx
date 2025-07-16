import React from 'react';
import HomeComponent from '../../components/homecomponent/HomeComponent';


const Home:React.FC = () => {
  return (
    <div className="App">
      <HomeComponent large={true}/>
    </div>
  );
}

export default Home;