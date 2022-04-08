import React from 'react'
import 
{ 
    Container,
    Grid,
    Typography
} from '@mui/material'

// Background
import CardMedia from "@mui/material/CardMedia";

import {color_one} from "../utils/Themes";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from '@material-ui/core';  

const useStyles = makeStyles({
    WriteComment:
    {
        width:"90%"
    },
    Comment:
    {
        width:"auto",
        margin:"20px",
        padding:"20px",
        backgroundColor:"#DBDBDB",
        borderColor:color_one.primary.main,
        borderRadius:"10px"
    },
    Description:
    {
        marginBottom: "30px",
        paddingLeft:"30px",
        paddingRight:"30px"
    }
});

export default function CommentSection() {
    
    const classes = useStyles();
  
    return (
    <Container sx={{overflowY:"scroll", height:"500px"}}>
    <Grid container className={classes.Comment} sx={{}}>
        <Avatar item xs={5} sx={{m:"10px", width:"30px"}}>E</Avatar>
        <Typography item xs={7} sx={{marginLeft:"30px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
        <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>

    <Grid container className={classes.Comment} sx={{borderColor:color_one.primary.main}}>
        <Avatar item xs={5} sx={{m:"10px", width:"30px"}}>E</Avatar>
        <Typography item xs={7} sx={{marginLeft:"30px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
        <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    
    <Grid container className={classes.Comment} sx={{borderColor:color_one.primary.main}}>
        <Avatar item xs={5} sx={{m:"10px", width:"30px"}}>E</Avatar>
        <Typography item xs={7} sx={{marginLeft:"30px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
        <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    
    <Grid container className={classes.Comment} sx={{borderColor:color_one.primary.main}}>
        <Avatar item xs={5} sx={{m:"10px", width:"30px"}}>E</Avatar>
        <Typography item xs={7} sx={{marginLeft:"30px", my:"auto"}}>Paquito Perez Papitas Papas</Typography>
        <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
</Container>
  )
}
