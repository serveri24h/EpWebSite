import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteEntries from './routes/route-entries';
import BackgroundSetter from './components/background/Background';
import PageHeader from './components/header/HeaderComponent';
//sdf
function App() {
  return (
    <>
      {<PageHeader/>}
      <BackgroundSetter/>
      <RouteEntries/>
    </>
  );
}

export default App;
