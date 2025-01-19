import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.page';
import Songs from './Songs/Songs.page';
import Band from './Band/Band.page';
import PageHeader from '../components/header/HeaderComponent';

const RouteEntries: React.FC = () => {
  return (
        <div className= 'sibar-split' style={{
            display:'flex',
            flexDirection:'row',
            height:'100%',
            width: '100%',
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/songs" element={<Songs />} />
                    <Route path="/band" element={<Band />} />
                </Routes>
            </Router>
        </div>
  );
};

export default RouteEntries;