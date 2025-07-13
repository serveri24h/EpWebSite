import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.page';
import Songs from './Songs/Songs.page';
import Band from './Band/Band.page';
import Contact from './Contact/Contact.page'

const RouteEntries: React.FC = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/band" element={<Band />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
  );
};

export default RouteEntries;