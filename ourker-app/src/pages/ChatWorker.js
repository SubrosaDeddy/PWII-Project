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
import BottomNavigation from '@mui/material/BottomNavigation';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const theme = createTheme({
    typography: {
      allVariants: {
        fontfamily: 'Lexend Deca',
        textTransform: 'none',
        fontSize: 25,
        fontWeight: 700
      },
    },

    right: {
        borderRadius: 1,  
        bgcolor: '#2777D4'
      }

  });


  
export default function ChatWorker() {


  return (

    <ThemeProvider theme={theme}>
    <Grid>
    
    <Divider />

    <Grid  item xs={12} style={{padding: '20px'}}>
        <TextField id="outlined-search" label="Buscar contacto" type="search" />
    </Grid>

    <Divider />

    <List sx={{ width: '100%', maxWidth: 560}}>


      <ListItem button alignItems="flex-start" sx={{ borderRadius: 16,  bgcolor: '#2777D4',  m:1}}>
        <ListItemAvatar>
        <Avatar
            src="/broken-image.jpg" 
         />
        </ListItemAvatar>
        <ListItemText
          primary="Fernando"
         secondary ={
            <React.Fragment>
              <Typography
                 sx={{ display: 'inline' }}
                 component="span"
                 variant="body2"
                 color="text.primary"
              >
              </Typography>
              {"Claro que si..."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem  button alignItems="flex-start" sx={{ borderRadius: 16,  bgcolor: '#2777D4',  m:1}}>
        <ListItemAvatar>
        <Avatar
            src="/broken-image.jpg" 
         />
        </ListItemAvatar>
        <ListItemText
          primary="Ivan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Hola te llamaba para lo de..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem  button alignItems="flex-start" sx={{ borderRadius: 16,  bgcolor: '#2777D4', m:1}}>
        <ListItemAvatar>
        <Avatar
            src="/broken-image.jpg" 
         />
        </ListItemAvatar>
        <ListItemText
          primary="Daniel"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'No creo poder estar disponible...'}
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
    <Grid item sx={{ marginLeft: 80, marginTop: -45}} xs={9}>
            <List>
                <ListItem key="1">
                    <Grid container sx={{ borderRadius: 1,  bgcolor: '#2777D4'}}>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Hola, quiero pedirle información sobre el trabajo de carpintero"  sx={{ p: 1}}></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="09:30" sx={{ p: 1}}></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="2">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="left" primary="Si, claro en seguida le mando la información"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="left" secondary="09:31"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem key="3">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Gracias, espero su mensaje!"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="10:30"></ListItemText>
                        </Grid>
                    </Grid>
                </ListItem>

                
                <Box>

                  
                <TextField id="outlined-basic-email" label="Escribe un mensaje" fullWidth />                
                <Button variant="outlined" startIcon={<SendIcon />}>
                   Mandar
                </Button>

                </Box>

            </List>
            <Divider />

        </Grid>

   
    </Grid>

    </ThemeProvider>


  );
}
