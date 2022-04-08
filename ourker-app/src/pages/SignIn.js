import React from 'react'
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

// Color
import {color_one} from "../utils/Themes";

function Copyright(props) {
    
    const useStyles = makeStyles({});

    return (
      <Typography variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          Ourker
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const theme = createTheme({
    typography: {
      allVariants: {
        fontfamily: 'Lexend Deca',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: 700
      },
    },
});

export default function SignIn() {
  
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          console.log({
            email: data.get('email'),
            password: data.get('password'),
          });
    };



    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);
    return (
      <ThemeProvider theme={theme}>
        <Grid container sx={{height:"100vh", overflow:"hidden", backgroundImage: 'url(/fondo_gradiente.jpg)'}}>
          <Grid item xs={12} sm={7} lg={5} component={Paper} elevation={0} square sx={{height:1}}>
            <Box sx={{py: 7, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', height:"100%"}}>
             
     
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>


              <Box
                sx={{
                my: 4,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              >

                 <Typography>Preview de imagen: </Typography>

                   <Avatar
                   src={imageUrl}
                   sx={{ width: 150, height: 150,  margin: 2}}
                   mt={1} textAlign="center"
                    />

<input
               accept="image/*"
               type="file"
               id="select-image"
              style={{ display: 'none' }}
               onChange={e => setSelectedImage(e.target.files[0])}
               />
              <label htmlFor="select-image">
              <Button variant="contained" color="primary" component="span">
               Cargar imagen
                </Button>
                </label>
               {imageUrl && selectedImage && (
                <Box mt={2} textAlign="center">

                  </Box>
                 )}

                </Box>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="Nombre de usuario"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel control={<Checkbox defaultChecked/>} label="Trabajador" />

                <Button onClick={() => navigate('/')} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,backgroundColor:color_one.primary.main,  borderRadius:5}}>
                  Registrar
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
}
