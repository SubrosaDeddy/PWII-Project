import React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

// Color
import { color_one } from "../utils/Themes";

function Copyright(props) {
  const useStyles = makeStyles({});

  return (
    <Typography variant="body2" align="center" {...props}>
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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
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
      <Grid
        container
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundImage: "url(/fondo_gradiente.jpg)",
          backgroundAttachment: "fixed",
        }}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Grid
          item
          xs={12}
          sm={7}
          lg={5}
          sx={{
            margin: "0 auto",
            backgroundColor: "white",
            padding: "24px 16px",
          }}
          elevation={5}
          square
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  mb: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>Preview de imagen: </Typography>

                <Avatar
                  src={imageUrl}
                  sx={{ width: 120, height: 120, margin: 2 }}
                  textAlign="center"
                />

                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span">
                    Cargar imagen
                  </Button>
                </label>
                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center"></Box>
                )}
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
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
                </Grid>

                <Grid item xs={12} md={6}>
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
                </Grid>

                <Grid item xs={12} md={6}>
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
                </Grid>

                <Grid item xs={12} md={6}>
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
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Descripción"
                    variant="outlined"
                    multiline
                    fullWidth
                    maxRows={2}
                    rows={2}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: color_one.primary.main,
                      borderRadius: 55,
                      marginLeft: "auto",
                    }}
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
