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
import { color_one } from '../utils/Themes';
import { Container } from '@mui/material';

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
      flexGrow: {
        flex: '1',
      },
    //   button: {
    //     '&:hover': {
    //       backgroundColor: color_one.primary.main,
    //       color: color_one.primary.secondary,
    //   },
    // }
  });

export default function UserChat() {

    const classes = '';

  return (

    <div>
    <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
            
            <Divider />
                <Grid item xs={12} style={{padding: '20px'}}>
                    <TextField id="outlined-basic-email"  label="Buscar" variant="outlined" fullWidth />
                </Grid>
            <Divider />
            
            <List>
                <ListItem button key="Javier">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150}}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Javier" ></ListItemText>
                </ListItem>

                <ListItem button key="Brandon">
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150 }}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Brandon">Brandon</ListItemText>
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
                 <ListItem button key="Javier" style={{ background: color_one.primary.main, color: 'white'}}>
                    <ListItemIcon>
                    <Avatar
                     src="/broken-image.jpg" 
                     sx={{ width: 150, height: 150}}
                     />
                    </ListItemIcon>
                    <ListItemText primary="Javier" ></ListItemText>
                </ListItem>
                <ListItem key="1">
                        <Grid container>

                            {/*Checar*/}
                            <Box component={Paper} elevaton ={1} sx={{background: color_one.primary.sendMessage, borderRadius: 16, padding: '1rem', marginRight: 0, marginLeft:'auto', display:'inline'}}>
                                <Typography >Buenos días, quisiera pedir informes</Typography>
                                <Typography >09:31</Typography>
                            </Box>
                        </Grid>
                </ListItem>
                <ListItem key="2">
                    <Grid container>

                        {/*Checar*/}
                        <Box component={Paper} elevaton ={1} sx={{ background: color_one.primary.reciveMessage, borderRadius: 16, padding: '1rem', marginRight: 'auto', marginLeft:0, display:'inline'}}>
                            <Typography >Buenos días, claro </Typography>
                            <Typography >09:31</Typography>
                        </Box>
                    </Grid>
                </ListItem>
                <ListItem key="3">
                    <Grid container>
                            <Box component={Paper} elevaton ={1} sx={{background: color_one.primary.sendMessage, borderRadius: 16, padding: '1rem', marginRight: 0, marginLeft:'auto', display:'inline'}}>
                                <Typography >Gracias</Typography>
                                <Typography >09:41</Typography>
                            </Box>
                    </Grid>
                </ListItem>
            </List>
            <Divider />
            <Grid container style={{padding: '20px'}}>
                <Grid item xs={11}>
                    <TextField id="outlined-basic" label="Escribe un mensaje" fullWidth />
                </Grid>
                
                <Button variant="outlined" startIcon={<SendIcon />}>
                   Enviar
                </Button>

            </Grid>
        </Grid>
    </Grid>
  </div>


  );
}
