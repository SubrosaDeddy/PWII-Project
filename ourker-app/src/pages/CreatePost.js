import React, { Fragment, useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import { color_one } from "../utils/Themes";
import { createTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Autocomplete,
  bottomNavigationClasses,
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CardMedia from "@material-ui/core/CardMedia";
import Post from "../models/Post";
import { InsertPost, GetPost, GetAll } from "../services/PostService";
import { Typography } from "@material-ui/core";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import storage from "../firebase"
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    allVariants: {
      fontfamily: "Lexend Deca",
      textTransform: "none",
      fontSize: 14,
      fontWeight: "bold",
    },
  },

  body: {
    border: "2px solid blue",
  },
});

let imagesLinkArr = [];
let imagesFileArr = [];

export default function CreatePost(props) {
  const options = ["Mecánico", "Carpintero"];
  const [images, setImages] = useState([]);
  const navigate = useNavigate();


  function addImage(e)
  {
    imagesLinkArr = [...imagesLinkArr, URL.createObjectURL(e)];
    imagesFileArr = [...imagesFileArr, e]
    setImages(imagesLinkArr);
  }

  function deleteElement(index)
  {
    imagesLinkArr.splice(index);
    imagesFileArr.splice(index);
    setImages(imagesLinkArr);
  }

  const getImagesArray = async() =>{
    const links = [];
    let name = "";
    
    imagesFileArr.forEach(e => {
      name = Date.now().toString();
      
      const uploadTask = storage
        .ref(`/imagesPosts/${name}`)
        .put(e);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("imagesPosts")
              .child(name)
              .getDownloadURL()
              .then((url) => {
                links.push(url);
              });
          }
        );
    });

    return links;
  }

  function getDDMMYYYY()
  {
    let today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firebaseLinks = [];
    let filename = [];
    const data = new FormData(event.currentTarget);
    
    imagesFileArr.forEach((file, i) => {      
      
      filename[i] = Date.now().toString();
      const uploadTask = storage.ref(`/imagesPosts/`+filename[i]).put(file);

      uploadTask.then((onFullfilled)=>{
        storage
          .ref("imagesPosts")
          .child(filename[i])
          .getDownloadURL()
          .then((url) => {
            firebaseLinks.push(url);
            if(firebaseLinks.length == imagesFileArr.length)
            {
              let post = {
                title: data.get("title"),
                description: data.get("description"),
                photos: firebaseLinks,
                _category: data.get("category"),
                _workerinfo: props.user._id,
                date: getDDMMYYYY()
              };

              const res = InsertPost(post);

              res
              .then((value) => {
                if (!value.error) {
                  post = new Post(value);
                  alert("Publicación creada exitosamente");
                  navigate("/");
                } else {
                  alert("Error");
                }
              })
              .catch((err) => {
                alert("Error");
              });
            }
          });
      })
    });

  };

  return (
    <Fragment>
      <Paper
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundImage: "url(/fondo3.jpg)",
        }}
      >
        <Grid spacing={1}>
          <Box height={"15px"} />
          <Paper
            elevation={3}
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              top: 9,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid
              container
              spacing={1}
              xl={10}
              m={"auto"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box
                component="form"
                sx={{ backgroundColor: color_one.primary.secondary }}
                onSubmit={handleSubmit}
              >
                <Box height={"10px"} />
                <TextField
                  margin="normal"
                  id="title"
                  label="Titulo"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  inputProps={{ minLength: 5, maxLength: 100}}
                />
                <TextField
                  margin="normal"
                  id="description"
                  label="Descripción"
                  name="description"
                  variant="outlined"
                  required
                  multiline
                  fullWidth
                  maxRows={5}
                  inputProps={{ minLength: 10, maxLength: 500}}
                />
                <Autocomplete
                  options={options}
                  sx={{ mx: "auto" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Categoria"
                      id="category"
                      name="category"
                      required
                    />
                  )}
                />
                <Box m={2} pt={4}>
                  <Button
                    fullWidth="true"
                    sx={{ mx: "auto" }}
                    type="submit"
                    variant="contained"
                    startIcon={<SendIcon />}
                  >
                    Publicar
                  </Button>
                </Box>
              </Box>
            </Grid>

            <TextField
              margin="normal"
              id="filled-read-only-input"
              type="hidden"
              label="ID de trabajador"
              defaultValue="1001"
            />
          </Paper>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "15vh" }}
        >
        <Grid item xs={3}>
          <label htmlFor="upload-photo">
              <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => addImage(e.target.files[0])}
                  required
                  
              />
              <br />
              <Fab color="primary" size="big" component="span" aria-label="add">
                  <AddPhotoAlternateIcon />
              </Fab>
          </label>
        </Grid>
        </Grid>
        <Grid container sx={{zIndex:"1", width:1, justifyContent:"space-around", width:"85%", mx:"auto", backgroundColor:"rgba(150,150,150,.7)", py:"25px", borderRadius:"15px"}}> 
            {images.map((data, index)=>{
                return (
                  <Grid item key={index} xs={4} sx={{textAlign:"right"}}>
                    <DeleteForeverIcon sx={{color: "#AA0000", fontSize:"40px", ml:1, mb:"-35px"}} onClick={(e) =>deleteElement(index)}/>
                    <Card component="div" sx={{zIndex:"1", p:"30px", backgroundColor:"rgba(0,0,0,0)"}}>
                      <CardMedia sx={{resize:"both"}} component="img" image={data}/>
                    </Card>
                  </Grid>
                )
              })}
        </Grid>
      </Paper>
    </Fragment>
  );
}
