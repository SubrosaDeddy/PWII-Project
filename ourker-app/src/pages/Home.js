import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from '@mui/icons-material/Check';
// Bar
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// Background
import CardMedia from "@mui/material/CardMedia";

import {color_one} from "../utils/Themes";

export default function Home() {
  // AppBar
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  //   Autocomplete
  const options = ["Option 1", "Option 2"];
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  return (
    // <Container>
    <ThemeProvider theme={color_one}>
        {/* Top */}
        <Grid sx={{backgroundColor:color_one.primary.main, m:0, py:8, px:1, width:1, alignItems:"center", justifyContent:"center"}}>
            <Typography xs={11} sm={10} md={9} lg={8} xl={7} variant="h4" component="h4" sx={{color:color_one.primary.secondary, mb:2, mx:"auto", textAlign:"center", p:"auto"}}>
            Te ayudamos a encontrar a la persona indicada para tu trabajo.
            </Typography>
            <Grid xs={11} sm={10} md={9} lg={8} xl={7} sx={{height:"fit-content", py:1, borderRadius:5, backgroundColor: color_one.primary.secondary, margin:"auto", display:"flex", alignItems:"center", flexWrap:"wrap"}}>
                <Grid item xs={11} sm={11} md={6} lg={5} xl={5} sx={{p:"auto", m:"auto", px:1, textAlign:"center"}}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="combo-box-demo"
                        options={options}
                        sx={{mx:"auto", backgroundColor:color_one.primary.secondary, mx:0.5}}
                        renderInput={(params) => (
                        <TextField {...params} label="Trabajo" variant="filled"/>
                    )}/>
                </Grid>
                <Grid item xs={11} sm={11} md={6} lg={5} xl={5} sx={{p:"auto", m:"auto", px:1, textAlign:"center"}}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="combo-box-demo"
                        options={options}
                        sx={{mx:"auto", backgroundColor:color_one.primary.secondary, mx:0.5}}
                        renderInput={(params) => (
                        <TextField {...params} label="Localidades" variant="filled"/>
                    )}/>
                </Grid>
                <Grid item xs={12} lg={1} sx={{p:0, m:"auto", textAlign:"center"}}>
                    <SearchIconWrapper sx={{position:"relative", my:1}}>
                        <SearchIcon/>
                    </SearchIconWrapper>
                </Grid>
            </Grid>
        </Grid>

        {/* Bod */}
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:5, backgroundColor:color_one.primary.secondary}}>
            <Typography variant="h4" component="h4">Si tienes trabajo por hacer ¡Ourker está contigo!</Typography>
            <Typography>Miles de trabajadores disponibles para que encuentres el que se ajuste mejor a tus necesidades</Typography>

            <Grid sx={{alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", width:"fit-content", display:"flex", pt:5, pb:1, px:"auto", textAlign:"center"}}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{alignItems:"center", alignContent:"center", textAlign:"center", p:"auto", mb:1, display:"flex", justifyContent:"center"}}>
                    <CardMedia component="img" src="https://i.kym-cdn.com/entries/icons/original/000/036/211/cover6.jpg" sx={{height:300, width:"auto", borderRadius:3, m:"auto", display:"block"}}/>
                </Grid>
                <Grid item xs={11} sm={11} md={10} lg={6} xl={6} sx={{alignItem:"center", px:"auto", mx:"auto"}}>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"left", justifyContent:"space-between", width:1, mt:0}}>
                        <Typography sx={{px:1, fontSize:20, fontWeight:"bold"}}>Te ayudamos a encontrar un trabajador que resuelva tu problema</Typography>  
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
                        <Button color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.primary.main, borderRadius:5, width:200, mx:"auto", color:color_one.primary.secondary, mt:2}}>Crea una cuenta</Button>
                    </Box>  
                </Grid>
            </Grid>
            
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between", width:"90%", padding:5}}>
                <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto"}}>
                    Publica tu trabajo en el portal de freelancing de mayor popularidad en México.
                </Typography>
                <Grid sx={{alignItems:"space-between", justifyContent:"center", width:1, p:3, flexWrap:"wrap", display:"flex", textAlign:"center"}}>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
                        </Box>
                    </Grid>
                </Grid>     
                <Button color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.primary.main, borderRadius:5, width:300, mx:"auto", color:color_one.primary.secondary}}>Publica gratis tu trabajo</Button>
            </Box> 
        </Box>
    </ThemeProvider>
  );
}
