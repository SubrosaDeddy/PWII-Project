import React, { Fragment } from 'react'
import 
{ 
    Button, 
    Container,
    Grid,
    Box,
    Typography, 
    TextField
} from '@mui/material'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from '@mui/material';

// Background
import CardMedia from "@mui/material/CardMedia";

import {color_one} from "../utils/Themes";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from '@emotion/react';

import SendIcon from '@mui/icons-material/Send';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Avatar } from '@material-ui/core';
import { border, borderColor, textAlign } from '@mui/system';
import { LinearProgress, CircularProgress } from '@mui/material';

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

export default function ViewPost() {
    const classes = useStyles();

    return (
    <Grid spacing={2} style={{
        backgroundImage: 'url(/fondo_gradiente.jpg)', height: '93vh'}}>
    
        <Box height={'15px'}/>
        <Paper elevation={3} sx={{
            p:2,
            margin: 'auto',
            maxWidth: 800,
            flexGrow: 1,
            top: 9,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
            <Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>
                            29/03/2022
            </Typography>

            <Grid container spacing={1} xl={10} m={'auto'} sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                    <Box component="form" noValidate onSubmit={""}>
                        <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto", textAlign:"center"}}>
                            Titulo
                        </Typography>
                    </Box>
            </Grid>

            <Grid>
                    <Box component="form" noValidate onSubmit={""} sx={{display: "flex", alignItems: "center"}}>
                        <Typography sx={{ fontSize:14, margin:"auto", textAlign:"left"}}>Trabajador: Pepito</Typography>
                        <Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>Categoria: Muebles</Typography>
                    </Box>
            </Grid>

            <Grid container spacing={1} xl={10} m={'auto'} className={classes.Description} sx={{display: "flex", alignItems: "center", justifyContent:"center", marginTop:"30px"}}>
                <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                </Typography>
                <LinearProgress variant="determinate" value={70} />
            </Grid>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", m:"20px"}}>
                    <Box sx={{m:"5px"}}> <ThumbUpAltIcon sx={{color:"green"}}/> <ThumbDownAltIcon sx={{color:"red"}}/></Box> 
                    <TextField id="outlined-basic" label="Write a comment..." variant="outlined" className={classes.WriteComment}/>
                    <SendIcon sx={{mx:"10px", color:color_one.primary.main, fontSize:"30px"}}/>
            </Box>
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
        </Paper>

    </Grid>
  )
}
