import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles({
    
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '80vh',
    },
    headBG: {
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0',
        
      backgroundColor: "#2777D4"
    },
    messageArea: {
      height: '60vh',
      overflowY: 'auto',
    },
    typography: {
        allVariants: {
          fontfamily: 'Lexend Deca',
          textTransform: 'none',
          fontSize: 500,
          fontWeight: 700
        },
      },


  });

export default function UserChat() {

    const classes = useStyles();

  return (

    <div>
    <Grid container>
        <Grid item xs={12} >
            <Typography variant="h5" className="header-message">Aqui va el navbar</Typography>
        </Grid>
    </Grid>
    <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
            <List>
                <ListItem button key="Javier">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150 }}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Javier"></ListItemText>
                </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{padding: '20px'}}>
                <TextField id="outlined-basic-email"  label="Buscar" variant="outlined" fullWidth />
            </Grid>
            <Divider />
            <List>
                <ListItem button key="Brandon">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150 }}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Brandon">Brandon</ListItemText>
                    <ListItemText secondary="Disponible" align="right"></ListItemText>
                </ListItem>
                <ListItem button key="Mario">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150 }}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Mario">Mario</ListItemText>
                </ListItem>
                <ListItem button key="Alejandra">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150 }}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Alejandra">Alejandra</ListItemText>
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={9}>
            <List className={classes.messageArea}>
                <ListItem key="1">
                    <Grid container>
                        <Grid item xs={12}>
                            <ListItemText align="right" primary="Hola, quiero pedirle información sobre el trabajo de carpintero"></ListItemText>
                        </Grid>
                        <Grid item xs={12}>
                            <ListItemText align="right" secondary="09:30"></ListItemText>
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
            </List>
            <Divider />
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic-email" label="Escribe un mensaje" fullWidth />
                </Grid>
                
                <Button variant="outlined" startIcon={<SendIcon />}>
                   Mandar
                </Button>

            </Grid>
        </Grid>
    </Grid>
  </div>


  );
}
