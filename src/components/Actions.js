//import React from 'react';
import React ,{component, useState} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar} from '@mui/material';
import { Toolbar} from '@mui/material';
import { Typography} from '@mui/material';

const Actions = () => {

     const [customer, customerData] = useState({Name:"",Country:"",Allocations:"" });

    function UpdateData (e){
        customerData ({...customer,[e.target.name]:[e.target.value]});
}

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

    <div id="action-body">
        <label> Customer Name:&nbsp;&nbsp;
            <input type="text" name="Name" value={customer.Name} onChange={UpdateData}></input>

        </label><br></br>

        <label> Country Name:&nbsp;&nbsp;
            <input type="text" name="Country" value={customer.Country} onChange={UpdateData}></input>

        </label><br></br>

        <label> No Of Allocations:&nbsp;&nbsp;
            <input type="text" name="Allocations" value={customer.Allocations} onChange={UpdateData}></input>

        </label><br></br>

        <button size="large" onChange={UpdateData}>Add Member</button>
    </div>
    </div>
  )
}


export default Actions;