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
    <Grid container component="main"  sx={{ height: '100vh'}}>
      <CssBaseline />
    
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image src="/ourker_logo.png" sx={{ maxWidth: "300px" }}/>

          {/* <Typography component="h1" variant="h2"  margin={5}>
            Crea una cuenta
          </Typography> */}
          <Box height={'15px'}/>
          <Avatar
            src="/broken-image.jpg" 
            sx={{ width: 100, height: 100 }}
         />

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

          {/* <Typography component="h1" textAlign="center" margin={5}>
            Foto del perfil
          </Typography> */}
          

          <Button  variant="contained"  component="label" fullWidth sx={{ mt: 3, mb: 2 }}>
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

            <FormControlLabel control={<Checkbox defaultChecked />} label="Trabajador" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar

            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>

      <Grid
        item

        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/fondo_gradiente.jpg)'
        }}
      />
    </Grid>
  </ThemeProvider>
  
    );
}
