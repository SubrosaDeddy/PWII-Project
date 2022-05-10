import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Services
import {GetUser, GetAll} from "../services/UserService"
import User from "../models/User";
import { GetWorkerByEmailValidation } from "../services/WorkerService";
import Worker from "../models/Worker";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Ourker</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    allVariants: {
      fontfamily: "Lexend Deca",
      textTransform: "none",
      fontSize: 14,
      fontWeight: 700,
    },
  },
});

export default function LogIn(props) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await GetUser(data.get("email"));
    const worker = await GetWorkerByEmailValidation(data.get("email"));

    if(!res.level)
    {
      let user = new User(res);
      if(user.validatePassword(data.get("password")))
      {
        // console.log(Object.values(worker))
        if(Object.values(worker).length > 1){
          
          props.setLoggWorker(true);
          props.setLoggedUser(user);
           navigate('/');
        } 
        else{
          props.setLoggWorker(false);
          props.setLoggedUser(user);
          navigate('/');
        }
      }
      else
      {
        alert("tekivocaste menso");
      }
    }
    else
    {
      alert("Nos ekivokamos menso");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundImage: "url(/fondo_gradiente.jpg)",
          backgroundAttachment: "fixed",
        }}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Grid
          item
          xs={12}
          md={8}
          lg={5}
          elevation={0}
          square
          sx={{
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '24px 16px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              textAlign="center"
              sx={{ m: 5}}
              
            >
              Inicia sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#2777D4" }}
              >
                Entrar
              </Button>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  onClick={() => navigate('/SignIn')}
                  sx={{ m: 2 }}
                  style={{
                    backgroundColor: "#2777D4",
                  }}
                >
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
