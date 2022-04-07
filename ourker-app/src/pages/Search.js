
import React, { Fragment, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Button, Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {color_one} from "../utils/Themes";
import SearchBar from '../components/SearchBar';
import { makeStyles } from "@material-ui/core/styles";


export default function Search() {
  
  return (
    <Box sx={{backgroundColor:color_one.primary.main, overflow:"hidden", height:"100vh", width:"100%", m:0, p:0}}>
      <Grid container sx={{backgroundColor:color_one.primary.secondary, width:"70%", m:"auto", marginTop:"10px", padding:"30px"}}>
        <Container sx={{borderWidth:"100px", borderColor:"black"}}>
          <SearchBar/>
        </Container>
        <Container>
          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#DCDCDC", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}>E</Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
          
          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#DCDCDC", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}>E</Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
          
          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#DCDCDC", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}>E</Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}