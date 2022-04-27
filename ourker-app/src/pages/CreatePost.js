import React, { Fragment } from 'react'
import Fab from '@mui/material/Fab';
import {color_one} from "../utils/Themes";
import { createTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { Alert, Autocomplete, Box, Button, Card, Grid,  Paper, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CardMedia from "@material-ui/core/CardMedia";
import Post from "../models/Post";
import { InsertPost, GetPost, GetAll } from '../services/PostService';

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



export default function CreatePost() 
{

    const options = ["Mecánico", "Carpintero"];
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = async(event) =>{
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let post =
      {
        title: data.get("title"),
        description: data.get("description"),
        _category: data.get("category")
      }
      console.log(post);
      const res = InsertPost(post);

      res.then(value =>{
        if(!res.level)
        {
          post = new Post(res);
          alert("Publicación creada exitosamente");
        }
        else
        {
          alert("Error");
        }
        });
    }

  return ( 
    <Fragment >
      <Paper  sx={{backgroundImage: 'url(/fondo3.jpg)', height: '67vh'}}>
        <Grid spacing={1}>
            <Box height={'15px'}/>
            <Paper elevation={3} sx={{p: 2,margin: 'auto',maxWidth: 500,flexGrow: 1,top: 9,backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>

              <Grid container spaicing= {1} xl={10} m={'auto'} sx={{ display:"flex", alignItems:"center"}}>
                  
              <Box component="form" noValidate sx={{backgroundColor: color_one.primary.secondary}} onSubmit={handleSubmit}>
                <Box height={'10px'}/>
                {/* <form> */}
                  <TextField margin="normal" id="title" label="Titulo" name="title" variant="outlined" required  fullWidth/> 
                  <TextField margin="normal"  id="description" label="Descripción" name="description" variant="outlined" required multiline fullWidth maxRows={5}/> 
                  <Autocomplete value={value} 
                  // onChange={(event, newValue) => {setValue(newValue)}} 
                  // inputValue={inputValue} 
                    id="category-autocomplete" options={options} sx={{mx:"auto"}} name="category"
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Categoria" required/>
                  )}/>
                  <Box m={2} pt={4}>
                  <Button fullWidth="true" sx={{mx:"auto"}} type='submit' variant="contained" startIcon={<SendIcon />}>
                  Publicar 
                  </Button>
                  </Box>
              {/* </form> */}
              </Box>

              </Grid>
              
              <TextField margin="normal" id="filled-read-only-input" type="hidden" label="ID de trabajador" defaultValue="1001"/>
            </Paper>
        </Grid>
      
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '15vh' }}>
          <Grid item xs={3}>
            <label htmlFor="upload-photo">
                <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" accept="image/*"/>
                <br/>
                <Fab color="primary" size="big" component="span" aria-label="add">
                  <AddPhotoAlternateIcon />
                </Fab>
            </label>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >

        <Grid item xs={3}>

        <Card>
      
      <CardMedia>
      <img src="/busqueda_workers.jpg"  width={500} alt="recipe thumbnail"/>
      <img src="/busqueda_filtros.jpg"  width={500} alt="recipe thumbnail"/>
      <img src="/work_figures.jpg"  width={500} alt="recipe thumbnail"/>
      </CardMedia>

      </Card>

        </Grid>   
        
      </Grid> 

    </Fragment>
  )
}
