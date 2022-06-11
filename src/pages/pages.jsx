import React from 'react';
import Home from './home';
import Cuisine from './cuisine'
import {Route, Routes, BrowserRouter} from 'react-router-dom';

const Pages = () => {
  return (
  
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine' element={<Cuisine />} />

        </Routes>
    

  )
}

export default Pages