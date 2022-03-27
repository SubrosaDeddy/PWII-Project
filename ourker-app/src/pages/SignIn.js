import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
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
import { Container } from '@mui/material';

// Color
import {color_one} from "../utils/Themes";

function Copyright(props) {
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
        <Grid container sx={{height:1, overflow:"hidden", backgroundImage: 'url(/fondo_gradiente.jpg)'}}>
          {/* <CssBaseline /> */}
        
          <Grid item xs={12} sm={7} lg={5} component={Paper} elevation={6} square sx={{height:1}}>
            <Box sx={{py: 7, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', height:"100%"}}>
                    <Avatar src="/broken-image.jpg" sx={{ width: 100, height: 100 }}/>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                      
                      <Button  variant="contained"  component="label" fullWidth sx={{ mt: 3, mb: 2, backgroundColor:color_one.primary.main,  borderRadius:5}}>
                        Cargar imagen
                        <input type="file" accept="image/*" hidden/>
                      </Button>
                    
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

                      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,backgroundColor:color_one.primary.main,  borderRadius:5}}>
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
