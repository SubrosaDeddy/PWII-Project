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
import { useState, useEffect } from 'react';
import { Image } from 'mui-image';


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
      button: {
        '&:hover': {
          backgroundColor: color_one.primary.main,
          color: color_one.primary.secondary,
      },
    }
  });

export default function UserChat() {

    const classes = useStyles();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);

  return (

    <div>


        <Button type="image"  src="/ourker_logo.png" color="primary" component="span"/>
        <button id="close" href="SignIn" class="closing"><img src="/ourker_logo.png"/></button>
        <input type="image"  href="SignIn" src="/ourker_logo.png" alt="Submit" width="48" height="48"></input>
        <button  href="/SignIn"><img src="/ourker_logo.png"/></button>


        <Button color="inherit" href="Home">
        <img src="/ourker_logo.png"/>
       </Button>

     </div>
    
        );
  }
