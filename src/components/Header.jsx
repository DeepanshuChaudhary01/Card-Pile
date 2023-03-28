import React from 'react'
import Logo from '../assets/icon.ico'
import {createTheme,ThemeProvider,Typography} from '@material-ui/core';
import {AppBar, Box,Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";

import { Link } from 'react-router-dom';

const darkTheme=createTheme({
  palette:{
    primary:{
      main:'#fff'
    },
    type:'dark',
  }
})

const Header = () => {

  let cssStyles={
    flex:1,
    color:'#26a69a',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    cursor:'pointer'

  }

  const navigate=useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position="static">
      <Toolbar>
      <Typography style={cssStyles} href='#' variant='h6'
              onClick={()=>navigate('/')}
              >Card Pile</Typography>
        <Box sx={{ p: '0.5rem',display: 'flex',marginLeft:'10px'}} >
          <img src={Logo} style={{ height:"3rem", width: "3rem",}} alt="logo"/>
          <Link to="/" style={{ color: '#80cbc4', padding: '0.5rem', textDecoration:"none" ,marginLeft:'10px',fontSize:'20px'}}>Home</Link>
        </Box>
        <Toolbar sx={{ px: '1rem', width: '100%' , display: 'flex', justifyContent: 'flex-end'}}>
          
          <Typography
            href='/history' variant='h6'
            onClick={()=>navigate('/history')}
            style={{align:"right",fontFamily:'Montserrat',
          color:'#80cbc4',cursor:'pointer'}}
          
          >
            History
          </Typography>
        </Toolbar>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header