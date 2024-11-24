import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteEntries from './routes/route-entries';
import BackgroundSetter from './components/background/Background';
//sdf
function App() {
  return (
    <>
      <BackgroundSetter/>
      <RouteEntries/>
    </>
  );
}

export default App;
