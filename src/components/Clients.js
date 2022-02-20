import React, {Component} from 'react'
import customer from './Actions';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar} from '@mui/material';
import { Toolbar} from '@mui/material';
import { Typography} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Clients = () => {


    function createData(Id,Name,country,Allocations) {
        return { Id,Name,country,Allocations};
      }
      
      const rows = [
        
      ];


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

    <div id='client-body'>
        

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Country&nbsp;</TableCell>
            <TableCell align="right">Allocations&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((customer) => (
            <TableRow
              key={customer.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {customer.name}
              </TableCell>
              <TableCell align="right">{customer.Id}</TableCell>
              <TableCell align="right">{customer.Name}</TableCell>
              <TableCell align="right">{customer.country}</TableCell>
              <TableCell align="right">{customer.Allocations}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        
        </div>
        </div>
  )
}

export default Clients

