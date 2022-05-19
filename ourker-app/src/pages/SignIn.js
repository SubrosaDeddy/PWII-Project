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
import Worker from "../models/Worker";
import { GetAllOccupation } from "../services/OcupationsService";
import { GetAllLocalities } from "../services/LocalitiesServices";
import SelectLocalities from "../components/SelectLocalities";
import SelectOccupations from "../components/SelectOccupations";

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
  
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  // Localities
  const [localities, setLocalities] = useState();
  const [valueLc, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  // Ocupations
  const [ocupation, setOcupation] = useState();
  const [valueOc, setValueOc] = React.useState();
  const [inputValueOc, setInputValueOc] = React.useState("");

  useEffect(() =>{
    async function fetchOccupations()
    {
      let OcArray = [];
      const dataOc = await GetAllOccupation();
      dataOc.forEach(occ => {
        OcArray.push(occ.title);
      });
      setOcupation(OcArray);
    }

    async function fetchLocalities()
    {
      let LocArray = [];
      const dataLoc = await GetAllLocalities();
      dataLoc.forEach(loc => {
        LocArray.push(loc.city);
      });
      setLocalities(LocArray);
    }

    fetchOccupations();
    fetchLocalities();
  }, []);

  // Images
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  // Firebase
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
   
    event.preventDefault();
   
    if (selectedImage != null)
     {
      

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
              const data = new FormData(event.target);

              const user = {
                username: data.get("username"),
                email: data.get("email"),
                fullname: data.get("fullname"),
                password: data.get("password"),
                profilepicture: url,
                _address: data.get("Localidades"),
              };

              let newUser = new User(user);

              const res = newUser.createUserDB();

              res
                .then((value) => 
                {
                  if (checked) 
                  {
                    props.setLoggedUser(value);
                    if (value.level) {
                      alert("El usuario no pudo ser creado");
                    }
                  } else 
                  {
                    if (!value.level) 
                    {
                      alert("Registro exitoso");
                      props.setLoggedUser(value);
                      props.setLoggWorker(false);
                      navigate("/");
                    } else {
                      alert("El usuario no pudo ser creado");
                    }
                  }
                })
                .catch((err) => 
                {
                  console.log(err);
                  alert("El usuario no pudo ser creado");
                });

              res.finally(function () {
                if (checked) 
                {
                  const worker = 
                  {
                    _userinfo: data.get("email"),
                    _ocupations: data.get("Ocupacion"),
                    description: data.get("Descripcion"),
                  };

                  let newWorker = new Worker(worker);
                  const w_res = newWorker.createWorkerDB();

                  w_res
                    .then(function (result) 
                    {
                      console.log(result);

                        if (!result.level) 
                        {
                          props.setLoggWorker(result);
                          alert("Registro exitoso");
                          navigate("/");
                        } else {
                          alert("El trabajador no pudo ser creado");
                        }
                      
                    
                    })
                    .catch((err) => 
                    {
                      alert("El trabajador no pudo ser creado");
                    });
                }
              });
            });
        }
      );
    } else {
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
                    inputProps={{ minLength: 10, maxLength: 100}}
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
                    autoComplete="name"
                    autoFocus
                    inputProps={{ minLength: 5, maxLength: 50}}
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
                    inputProps={{ minLength: 10, maxLength: 100, pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"}}
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
                    inputProps={{ minLength: 10, maxLength: 100}}
                  />
                </Grid>

                <Grid item xs={12}>
                  <SelectLocalities getLocValue= {setLocalities}/>
                </Grid>
                
                <input value={url} name="ImageUser" hidden></input>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Trabajador"
                    checked={checked}
                    onChange={handleChange}
                  />
                </Grid>

                {checked && (
                  <Grid item xs={12}>
                    <SelectOccupations getOcupValue={setOcupation}/>
                  </Grid>
                )}
                {checked && (
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      id="outlined-basic"
                      label="Descripción"
                      variant="outlined"
                      name="Descripcion"
                      required
                      multiline
                      fullWidth
                      maxRows={5}
                      rows={5}
                      inputProps={{ minLength: 10, maxLength: 300}}
                    />
                  </Grid>
                )}
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
