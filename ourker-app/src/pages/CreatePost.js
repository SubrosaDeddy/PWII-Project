import React, { Fragment } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {color_one} from "../utils/Themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'mui-image'
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Typography } from '@material-ui/core'
import { Autocomplete, Box, Button, Card, Container, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Divider from '@mui/material/Divider';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia"

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



export default function CreatePost() {

    const options = ["Mecánico", "Carpintero"];
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");


  return ( <Fragment >
    <Paper  sx={{
   backgroundImage: 'url(/fondo3.jpg)', height: '93vh'
 }}>

 <Grid
 spacing={1} 
 >
     <Box height={'15px'}/>
     <Paper elevation={3} sx={{
         p: 2,
         margin: 'auto',
         maxWidth: 800,
         flexGrow: 1,
         top: 9,
         backgroundColor: (theme) =>
         theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
     }}>

         <Grid container spaicing= {1} xl={10} m={'auto'} sx={{ display:"flex", alignItems:"center"}}>
             
         <Box component="form" noValidate onSubmit={""} sx={{backgroundColor: color_one.primary.secondary}}>
                 
             <Box height={'10px'}/>
             <TextField margin="normal" id="Titulo" label="Titulo" variant="outlined" required  fullWidth/> 
             <TextField margin="normal" id="outlined-basic" label="Descripción" variant="outlined" required multiline fullWidth maxRows={5} rows={5}/> 
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
                     sx={{mx:"auto"}}
                     renderInput={(params) => (
                     <TextField {...params} label="Categoria"/>
                 )}/>

            <TextField margin="normal" id="filled-read-only-input" label="ID de trabajador" defaultValue="1001"  InputProps={{readOnly: true}}/>

            <Stack direction="row" spacing={2}>

            <Button variant="contained" startIcon={<SendIcon />}>
             Publicar 
            </Button>
             
             </Stack>

         </Box>
             
         </Grid>
         
     </Paper>

 </Grid>
 
 <Grid
     container
     spacing={0}
     direction="column"
     alignItems="center"
     justifyContent="center"
     style={{ minHeight: '15vh' }}
 >

 <Grid item xs={3}>

 <label htmlFor="upload-photo">
     <input
     style={{ display: 'none' }}
     id="upload-photo"
     name="upload-photo"
     type="file"
     accept="image/*"
    />

     <br />

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
