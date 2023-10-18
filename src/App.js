import React, { useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Welcome from "./Components/Welcome"
import Test from "./Components/Test"
import {
  Routes,
  Route, BrowserRouter, Switch,
} from 'react-router-dom';


const App = () => {

           return(
            <>
            
            <BrowserRouter>
            <Fade top> <Header /></Fade>
            <Routes>
                <Route path='/' element={<Fade top><Welcome/></Fade>}/>
                <Route path='/main-page' element={<Fade top><Body/></Fade>}/>
                <Route path='/test' element={<Fade top><Test /></Fade>}/>
            </Routes>
            <Fade top><Footer /></Fade>
            </BrowserRouter>
          
            
            </>
           )
}

export default App;
