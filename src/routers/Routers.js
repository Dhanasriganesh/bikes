import React, { useState } from 'react';
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Bikelist from '../pages/Bikelist'
import Bikedetails from '../pages/Bikedetails'
import Blogdetails from '../pages/Blogdetails'
import Contact from '../pages/Contact'
import Honda from "../pages/Honda"
import Hero from '../pages/Hero'
import Bajaj from '../pages/Bajaj'
import Tvs from '../pages/Tvs'
import Tvsraider from '../pages/Tvsraider'
import Price from '../components/Price'
import Offers from '../pages/Offers'
import Bike from '../pages/UserDetailsForm';
function Routers() {
  return (
    
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bikes' element={<Bikelist/>}/>
        <Route path='/bikes/:slug' element={<Bikedetails/>}/>
      
        <Route path='/blogs/:slug' element={<Blogdetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/honda' element={<Honda/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/tvs' element={<Tvs/>}/>
        <Route path='/bajaj' element={<Bajaj/>}/>
        <Route path='/tvsraider' element={<Tvsraider/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/book-now' element={<Bike/>}/>
    </Routes>
  )
}

export default Routers