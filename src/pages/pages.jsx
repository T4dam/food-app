import React from 'react';
import Home from './home';
import Cuisine from './cuisine'
import {Route, Routes} from 'react-router-dom';
import Searched from './searched';

const Pages = () => {
  return (
  
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
        </Routes>
    

  )
}

export default Pages