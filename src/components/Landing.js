//import React from 'react';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar} from '@mui/material';
import { Toolbar} from '@mui/material';
import { Typography} from '@mui/material';



const Landing = () => {
  return (
      <div>

            <AppBar position="static" id='bar'>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                        <Link to="/" style={{ textDecoration: 'none',color:'white' }}>Home</Link>
                </Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="h6" color="inherit" component="div">
                        <Link to="/addData" style={{ textDecoration: 'none',color:'white' }}>Add Member</Link>
                </Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="h6" color="inherit" component="div">
                        <Link to="/ShowData" style={{ textDecoration: 'none',color:'white' }}>All Clients</Link>
                </Typography>
            </Toolbar>
            </AppBar>

    <div id="landing-page">
            <h1 id="landing-page-header">Client Relationship Managment System</h1>
            <h2 id="landing-page-subheader">The system that will save you time and money</h2>
        </div>
        </div>
  )
}


export default Landing;