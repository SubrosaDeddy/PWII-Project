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
import { InsertUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import User from "../models/User";

// Color
import { color_one } from "../utils/Themes";
import storage from "../firebase";
import { Autocomplete } from "@mui/material";

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

export default function SignIn(props) {
  const fileInput = document.getElementById("select-image");

  const options = ["Carpintero", "Mecanico"];
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");


  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  // Firebase
  const [url, setUrl] = useState("");


  // const uploadImage = () => {

  if(selectedImage !=null){
    const uploadTask = storage
    .ref(`/imagesUser/${selectedImage.name}`)
    .put(selectedImage);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("imagesUser")
        .child(selectedImage.name)
        .getDownloadURL()
        .then((url) => {
          setUrl(url);
        });
    }
  );
  }
    
  // };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    if (selectedImage !=null) {
      event.preventDefault();
      const data = new FormData(event.target);

      const user = {
        username: data.get("username"),
        email: data.get("email"),
        fullname: data.get("fullname"),
        password: data.get("password"),
        profilepicture: data.get("ImageUser"),
      };
      
      let newUser = new User(user);

      const res = newUser.createUserDB();

      res
        .then((value) => {
          if (!value.level) {
            alert("Registro exitoso");
            props.setLoggedUser(value);
            navigate("/");
          } else {
            alert("El usuario no pudo ser creado");
          }
        })
        .catch((err) => {
          alert("El usuario no pudo ser creado");
        });
    }else{
      alert("No se ha seleccionado una imagen");
    }
  };

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
          // component={Paper}
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
                  src={image}
                  sx={{ width: 120, height: 120, margin: 2 }}
                  textAlign="center"
                />

                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  name="profilepicture"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button variant="contained" color="primary" component="span">
                    Cargar imagen
                  </Button>
                </label>
                {image && selectedImage && (
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
                    name="fullname"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Nombre de usuario"
                    name="username"
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

                <input value={url} name="ImageUser" hidden></input>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Trabajador"
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

                <Grid item xs={12} md={6}>
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
                <TextField {...params} label="Localidades"/>
            )}/>
                </Grid>
                {/* <button onClick={uploadImage}>Upload</button> */}
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
                    Registrar
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
