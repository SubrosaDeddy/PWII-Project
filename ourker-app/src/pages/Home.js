import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Autocomplete,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
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
import Card from "@mui/material/Card";

export default function Home() {
    // AppBar
  const color_one = createTheme({
    palette: {
      primary: {
        main: "#eceff1",
        azul: "#2777D4",
        white:"#FEFEFE"
      },
    },
  });

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.32),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

    //   Autocomplete
    const options = ["Option 1", "Option 2"];
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");

  return (
    // <Container>
    <ThemeProvider theme={color_one}>
      {/* <AppBar position='static' color='primary'> */}
      <Box sx={{ flexGrow: 1, boxShadow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ourker
          </Typography>

          <Stack spacing={1} direction="row">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Button color="inherit" variant="outlined">
              Registrate
            </Button>
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </Box>

      <Box sx={{ m: 1, backgroundColor:color_one.palette.primary.azul, height:300, m:0, Width:1, alignItems:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Typography variant="h4" component="h4" sx={{color:color_one.palette.primary.white, mt:5}}>
          Te ayudamos a encontrar a la persona indicada para tu trabajo.
        </Typography>
        <Box sx={{width:1000, height:75, borderRadius:5, backgroundColor: color_one.palette.primary.white, margin:"auto", display:"flex", alignItems:"center"}}>
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
                sx={{mx:"auto", width:400, backgroundColor:color_one.palette.primary.white}}
                renderInput={(params) => (
                <TextField {...params} label="Trabajo" variant="filled"/>
            )}/>
                {/* <TextField id="filled-basic" label="Trabajos" variant="filled" sx={{mx:"auto", width:400, backgroundColor:color_one.palette.primary.white}} /> */}
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
                sx={{mx:"auto", width:400, backgroundColor:color_one.palette.primary.white}}
                renderInput={(params) => (
                <TextField {...params} label="Localidades" variant="filled" sx={{mx:"auto", width:400, backgroundColor:color_one.palette.primary.white}} />
            )}/>
            {/* <TextField id="filled-basic" label="Localidades" variant="filled" sx={{mx:"auto", width:400, backgroundColor:color_one.palette.primary.white}} /> */}
            <SearchIconWrapper sx={{position:"relative", m:1}}>
              <SearchIcon sx={{display:"inline"}}/>
            </SearchIconWrapper>
        </Box>
      </Box>

      <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:5}}>
        <Typography variant="h4" component="h4">Si tienes trabajo por hacer ¡Ourker está contigo!</Typography>
        <Typography>Miles de trabajadores disponibles para que encuentres el que se ajuste mejor a tus necesidades</Typography>

        <Container sx={{display:"flex", flexDirection:"row", alignItems:"space-between", justifyContent:"space-between", padding:5}}>
          <CardMedia component="img" src="https://i.kym-cdn.com/entries/icons/original/000/036/211/cover6.jpg" sx={{height:300, width:"auto"}}/>
          <Box sx={{display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between", Width:"90%"}}>
            <Typography sx={{fontSize:20, fontWeight:"bold"}}>Te ayudamos a encontrar un trabajador que resuelva tu problema</Typography>  
            <Typography sx={{fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.palette.primary.azul}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
            <Typography sx={{fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.palette.primary.azul}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
            <Typography sx={{fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.palette.primary.azul}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
            <Typography sx={{fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.palette.primary.azul}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
            <Typography sx={{fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.palette.primary.azul}}/> Tenemos los trabajadores más trabajadores del trabajo</Typography>    
            <Button color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.palette.primary.azul, borderRadius:5, width:200, mx:"auto", color:color_one.palette.primary.white}}>Crea una cuenta</Button>
          </Box>  
        </Container>
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between", width:"90%", padding:5}}>
            <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto"}}>
                  Publica tu trabajo en el portal de freelancing de mayor popularidad en México
            </Typography>
          <Box sx={{display:"flex", flexDirection:"row", alignItems:"space-between", justifyContent:"space-between", width:"90%", padding:5}}>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"30%", padding:1}}>
                  <CheckIcon sx={{color:color_one.palette.primary.azul, fontSize:75}}/>
                  <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"30%", padding:1}}>
                  <CheckIcon sx={{color:color_one.palette.primary.azul, fontSize:75}}/>
                  <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"30%", padding:1}}>
                  <CheckIcon sx={{color:color_one.palette.primary.azul, fontSize:75}}/>
                  <Typography>Ut lobortis tellus et fermentum euismod. Vivamus ornare urna at ipsum condimentum, ac accumsan neque interdum. Nam aliquam nisl erat, sit amet suscipit arcu aliquam sed. Sed imperdiet laoreet eros vel semper. Morbi orci massa, gravida at nunc nec, lacinia cursus justo. Fusce et hendrerit nisl.</Typography>
            </Box>
          </Box>     
          <Button color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.palette.primary.azul, borderRadius:5, width:300, mx:"auto", color:color_one.palette.primary.white}}>Publica gratis tu trabajo</Button>
        </Box> 
      </Box>
    </ThemeProvider>
  );
}
