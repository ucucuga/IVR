import React, { useState, useContext, } from "react";
import { ContainerFooter } from "./style.js"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import { TypeAnimation } from 'react-type-animation';
import {useSound} from 'use-sound';
import rickroll from './never-gonna-give-u-up.mp3';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [play, { sound, stop}] = useSound(rickroll);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const handleSound = () => {
    stop();
    play();
  };


  return (
    <ContainerFooter >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
          style={{ background: '#131516' }}
        >
          <BottomNavigationAction
            label="Stepik CTF" style={value === 0 ? { color: '#D90368' } : { color: '#fdf7f7' }}
            icon={<SchoolIcon style={value === 0 ? { color: '#D90368' } : { color: '#fdf7f7' }} />}
            sx={{ color: '#fdf7f7' }}
            component={Link}
            to="https://stepik.org/course/132488/info"
          /> 
          <BottomNavigationAction
            onClick={handleSound}
            label="Обратная связь" style={value === 1 ? { color: '#D90368' } : { color: '#fdf7f7' }}
            icon={<MailOutlineIcon style={value === 1 ? { color: '#D90368' } : { color: '#fdf7f7' }} />}
            sx={{ color: '#fdf7f7' }}
          />
          <BottomNavigationAction
            label="Оставить отзыв на курс" style={value === 2 ? { color: '#D90368' } : { color: '#fdf7f7' }}
            icon={<ChatIcon style={value === 2 ? { color: '#D90368' } : { color: '#fdf7f7' }} />}
            sx={{ color: '#fdf7f7' }}
            component={Link}
            to="https://t.me/stepik_ctf_bot"
          />
          <BottomNavigation>
            <TypeAnimation
            sequence={['Be stronger', 1000, 'Be smarter', 1000, 'Be better', 1000]}
            style={{ fontSize: '1em', width: 133,position: 'absolute', right: 1, bottom: 20, background: '#131516'}}
            cursor={true}
            repeat={Infinity}
          />
          </BottomNavigation>
        </BottomNavigation>
      </Box>
    </ContainerFooter>

  )
}

export default Footer;