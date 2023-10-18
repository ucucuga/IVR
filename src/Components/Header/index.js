import React, {useState, useEffect} from "react";
import {ContainerHeader, StyledIcons, H2} from "./style.js"
import './style.css';
import {
    Routes,
    Route, BrowserRouter,
  } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import { bounce } from 'react-animations';
import PublicIcon from '@mui/icons-material/Public';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import InfoIcon from '@mui/icons-material/Info';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <ContainerHeader>
      <Grid><H2><Bounce><h2>CTF</h2></Bounce></H2></Grid>
      <Grid><Link to="/" className="wave"><WavingHandIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="/main-page" className="StyledIcons"><AssistantPhotoIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="#games_format" className="turning"><PublicIcon fontSize="large" /></Link></Grid>
      <Grid><Link to="#info_point" className="StyledIcons"><InfoIcon fontSize="large" /></Link></Grid>
    </ContainerHeader>    
  );
}
  


export default Header