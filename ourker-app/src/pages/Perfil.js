import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Search() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <>
        <Grid container component="main" sx={{ height: '100%', background: 'linear-gradient(to top, #04448c,#00236f)'}}>   
                

          <div style={{marginLeft:'auto',marginRight:'auto'}}>
            <Card sx={{ display: 'flex',maxWidth: '75%', minWidth: 350, justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginTop:'1%' }}>
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150, marginTop:4 }}
                image="Logo192.png"
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'contents', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto',maxWidth:'50%' }}>
                        <Typography component="div" variant="h4">
                          Angel Rodriguez D.
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Hola me llamo angel y soy un trabajador en esta app asi es mirenme
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              
                        </Typography>
                    <div style={{display:"flex"}}>    
                      <div>  
                        <Typography component="div" variant="h6" >
                          Apodaca, Nuevo Leon  
                        </Typography>
                        
                        <div style={{display:"flex"}}>
                          <CardMedia
                            component="img"
                            sx={{ width: 15 }}
                            image="Check.png"
                            alt="Live from space album cover"
                            />
                          <Typography  variant="subtitle1" >
                            120  
                          </Typography>
                        </div>
                      </div>       
                    </div>
                      </CardContent>
              </Box>
              <div>
                  <CardMedia
                        component="img"
                        sx={{ width: 100, height:100, marginTop:5 }}
                        image="Check.png"
                        alt="Live from space album cover"
                  />
                  <CardActions>
                    <Button size="small" variant="contained">Contactar</Button>
                  </CardActions>
              </div>

            </Card>
          </div>
                
                  
          <ImageList sx={{ width: '75%', height: 450,marginLeft:'auto',marginRight:'auto' }} cols={4} rowHeight={200}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
       
          <React.Fragment>
            <CssBaseline />
            <Container fixed>
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
          </React.Fragment>

                
        </Grid> 
    </>
    
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];