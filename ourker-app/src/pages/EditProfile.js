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
import SelectLocalities from "../components/SelectLocalities";
import SelectOccupations from "../components/SelectOccupations";
import User from "../models/User";
import Worker from "../models/Worker"
import { useNavigate } from "react-router-dom";
import { GetWorkerByEmailValidation } from "../services/WorkerService";
import storage from "../firebase";

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
  console.log(props.work);
  const navigate = useNavigate();

  const [dataWorker, setDataW] = useState();
  // const [varOc, setVarOc ] = useState("");
  const [varLoc, setVarLoc] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (props.user && selectedImage == null) {
      setImageUrl(props.user.profilepicture);
    } else {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }
  }, [selectedImage]);


  // Info del worker
  useEffect(() =>{
    async function fetchWorker(){
      const worker = await GetWorkerByEmailValidation(props.user.email)

      if(worker._id == null){
        console.log("no trabajador");
      }else{
        setDataW(worker);
      }
    }

    fetchWorker();

  }, [])

  function getDescription(data, trabajador){

    if(trabajador._id != undefined){

      const worker ={
        _id: trabajador._id,
        description: data.get("Descripcion")
      }
  
      let newWorker = new Worker(worker);
      const res2 = newWorker.updateWorkerDB();
  
      res2.then((value) =>{
  
        if(!value.level){
          alert("datos actualizados");
          navigate("/");
        }else{
          alert("Algo salio mal");
        }
      })
      
    }
    

  }

  function getDataUser(data, photo, trabajador){

    let pass;

    if(data.get("password") != ""){
      if(data.get("password") === props.user.password){
        alert("La contraseña no puede ser la misma");
        return;
      }else{
        pass = data.get("password");
      }
     
    }else{
      pass =  props.user.password;
    }

    const user ={
      username: data.get("username"),
      email: props.user.email,
      fullname: data.get("fullname"),
      password: pass,
      profilepicture: photo,
      _address: props.user._address
    }

    let newUser = new User(user);

    const res = newUser.updateUserDB();

    res.then((value) =>{

      if(!value.level){

        props.setLoggedUser(newUser);
        // Actualizar worker 
        if(trabajador){
         getDescription(data, trabajador);
        }else{
          alert("datos actualizados");
          navigate("/");
        } 
      }else{
        alert("Algo salio mal")
      }
    })
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Validación cambiar imagen 
    if(selectedImage !=null){

      const uploadTask = storage
      .ref(`/imagesUser/${selectedImage.name}`)
      .put(selectedImage);

      uploadTask.on(
        "state_changed",
        (snapshot) =>{},
        (error) =>{
          console.log(error);
        },
        () =>{
          storage
          .ref("imagesUser")
          .child(selectedImage.name)
          .getDownloadURL()
          .then((url) =>{
            getDataUser(data, url, dataWorker);
            // getDescription(data, dataWorker);
          });
        }
      )

    }else{
      getDataUser(data, props.user.profilepicture, dataWorker);
      // getDescription(data, dataWorker);
    }
    // const user ={
    //   username: data.get("username"),
    //   email: props.user.email,
    //   fullname: data.get("fullname"),
    //   // password: data.get("password"),
    //   profilepicture: props.user.profilepicture,
    //   _address: props.user._address
    // }

    // let newUser = new User(user);

    // const res = newUser.updateUserDB();

    // res.then((value) =>{

    //   if(!value.level){
    //     alert("datos actualizados");
    //     props.setLoggedUser(newUser);
    //     // navigate("/");
    //   }else{
    //     alert("Algo salio mal")
    //   }
    // })

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
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="fullname"
                    autoComplete="name"
                    autoFocus
                    defaultValue={props.user.fullname}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="userName"
                    label="Nombre de usuario"
                    name="username"
                    autoComplete="userName"
                    defaultValue={props.user.username}
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    disabled
                    defaultValue={props.user.email}
                    autoFocus
                  />
                </Grid>


                <Grid item xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

                {/* <Grid item xs={12}>
                  <SelectLocalities getLocValue={setVarLoc}/>
                </Grid> */}

                {/* {props.work && (
                  <Grid item xs={12}>
                    <SelectOccupations />
                  </Grid>
                )} */}

                {dataWorker && (
                  <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    id="outlined-basic"
                    label="Descripción"
                    variant="outlined"
                    name="Descripcion"
                    multiline
                    fullWidth
                    maxRows={5}
                    rows={5}
                    defaultValue= {dataWorker.description}
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
