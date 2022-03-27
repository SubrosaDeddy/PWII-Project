import React from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Image } from 'mui-image';
import BottomNavigation from '@mui/material/BottomNavigation';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
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


export default function LogIn() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      

  return (

    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100%', backgroundImage: 'url(/fondo1.jpg)'}}>
      {/* <CssBaseline /> */}
      <Grid item xs={false} md={4} lg={7}/>
      <Grid item xs={12} md={8} lg={5} component={Paper} elevation={6} square>
        <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography component="h1" variant="h5" textAlign="center" sx={{ m: 5}}>
            Inicia sesión
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Correo electrónico" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password"/>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{backgroundColor: "#2777D4"}}>
              Entrar
            </Button>

              <Box textAlign='center'>
              <Button variant="contained" href="#contained-buttons" sx={{ m: 2 }}   style={{
                backgroundColor: "#2777D4"}}>
               Registrar
              </Button>
              </Box>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  
  );

}
