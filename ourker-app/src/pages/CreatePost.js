import React, { Fragment, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import {color_one} from "../utils/Themes";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { Alert, Autocomplete, Box, Button, Card, Grid,  Paper, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CardMedia from "@material-ui/core/CardMedia";
import Post from "../models/Post";
import { InsertPost, GetPost, GetAll } from '../services/PostService';
import ImageDisplay from '../components/ImageDisplay';

const theme = createTheme({
    typography: {
      allVariants: {
        fontfamily: 'Lexend Deca',
        textTransform: 'none',
        fontSize: 14,
        fontWeight: "bold",
      },
    },

    body: {
        border: '2px solid blue'
      },
   
  });

export default function CreatePost(props) 
{

    const options = ["Mecánico", "Carpintero"];
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");
    
    const [images, setImages] = React.useState([]);
    const [imagesURL, setImagesURL] = React.useState([]);

    useEffect(() => {
      if (images) {
        alert("Sí");
        setImagesURL(window.URL.createObjectURL(images[0]));
      }
      else
      {
        alert(`Length: ${images.array.length}`);
      }
    }, [images]);

    const handleSubmit = async(event) =>{
      event.preventDefault();
      
      const data = new FormData(event.currentTarget);
      
      let post =
      {
        title: data.get("title"),
        description: data.get("description"),
        _category: data.get("category"),
        _workerinfo: props.user._id
      }

      const res = InsertPost(post);

      res.then(value =>{
        if(!value.error)
        {
          post = new Post(value);
          alert("Publicación creada exitosamente");
        }
        else
        {
          alert("Error");
        }
        })
        .catch(err=>{
          alert("Error");
        });
    }

  return ( 
    <Fragment >
      <Paper  sx={{minHeight: "calc(100vh - 64px)", backgroundImage: 'url(/fondo3.jpg)'}}>
        <Grid spacing={1}>
            <Box height={'15px'}/>
            <Paper elevation={3} sx={{p: 2,margin: 'auto',maxWidth: 500,flexGrow: 1,top: 9,backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>

              <Grid container spacing= {1} xl={10} m={'auto'} sx={{ display:"flex", alignItems:"center"}}>
                  
              <Box component="form" noValidate sx={{backgroundColor: color_one.primary.secondary}} onSubmit={handleSubmit}>
                <Box height={'10px'}/>
                    <TextField margin="normal" id="title" label="Titulo" name="title" variant="outlined" required  fullWidth/> 
                    <TextField margin="normal"  id="description" label="Descripción" name="description" variant="outlined" required multiline fullWidth maxRows={5}/> 
                    <Autocomplete value={value} 
                    // onChange={(event, newValue) => {setValue(newValue)}} 
                    // inputValue={inputValue} 
                      options={options} sx={{mx:"auto"}}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Categoria" id="category" name="category" required/>
                    )}/>
                    <Box m={2} pt={4}>
                    <Button fullWidth="true" sx={{mx:"auto"}} type='submit' variant="contained" startIcon={<SendIcon />}>
                    Publicar 
                    </Button>
                    </Box>
              </Box>

              </Grid>
              
              <TextField margin="normal" id="filled-read-only-input" type="hidden" label="ID de trabajador" defaultValue="1001"/>
            </Paper>
        </Grid>
      
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '15vh' }}>
          <Grid item xs={3}>
            <label htmlFor="upload-photo">
                <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" accept="image/*" onChange={(e) => setImages(e.target.files[0])}/>
                <br/>
                <Fab color="primary" size="big" component="span" aria-label="add">
                  <AddPhotoAlternateIcon />
                </Fab>
            </label>
          </Grid>
        </Grid>
        {/* <ImageDisplay images={["https://i.pinimg.com/736x/f7/b2/7a/f7b27a3ac6a79a9414ac208931e0da3c--beluga-whales.jpg", "https://i.pinimg.com/736x/f7/b2/7a/f7b27a3ac6a79a9414ac208931e0da3c--beluga-whales.jpg", "https://i.pinimg.com/736x/f7/b2/7a/f7b27a3ac6a79a9414ac208931e0da3c--beluga-whales.jpg"]}/> */}
        <ImageDisplay images={imagesURL}/>
      </Paper>
    </Fragment>
  )
}
