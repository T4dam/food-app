import React from 'react';
import Home from './home';
import Cuisine from './cuisine'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

const Pages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine' element={<Cuisine />} />

        </Routes>
    
    </BrowserRouter>
  )
}

export default Pages