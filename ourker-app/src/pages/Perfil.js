import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { color_one } from "../utils/Themes";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import SummarizeTwoToneIcon from '@mui/icons-material/SummarizeTwoTone';
import Report from './Report';
import PostsComponent from "../components/PostsComponent";

export default function Search() {
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  return (
      <React.Fragment>
        <Box sx={{width: "99%", height: "100vh", position: "absolute", backgroundImage: "linear-gradient(to top, #04448c,#00236f)", overflow: "hidden"}}>
          <Box sx={{width: "70%", mx:"auto", backgroundColor: color_one.primary.secondary, marginTop: "15px", padding:"30px"}}>
            <Grid container sx={{justifyContent: "space-around"}}>
              <Grid item xs={3} sx={{}}>
                  <CardMedia
                  component="img"
                  sx={{ width: 150, height: 150, mx: "auto"}}
                  image="Logo192.png"
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item xs={6}>

              <Typography component="div" variant="h4">
                  Angel Rodriguez D.
              </Typography>
              <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Hola me llamo angel y soy un trabajador en esta app asi es
                  mirenme Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </Grid>

              <Grid item xs={3} sx={{justifyContent: "space-around", alignContent: "center" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, mx: "auto"}}
                  image="Check.png"
                  alt="Live from space album cover"
                />
                <CardActions sx={{mx:"auto"}}>
                  <Button size="small" variant="contained" href="Chat" sx={{mx:"auto"}}>
                    Contactar
                  </Button>
                </CardActions>
              </Grid>

              <Grid item xs={12} sx={{mx: "auto", textAlign: "center", marginTop: "15px"}}> 
                    <Typography component="div" variant="h6">
                      Apodaca, Nuevo Leon
                    </Typography>

                  <Box sx={{display: "flex"}}>
                    <CardMedia
                          component="img"
                          sx={{ width: 29, marginLeft: "auto", textAlign: "center"}}
                          image="Check.png"
                          alt="Live from space album cover"
                        />
                      <Typography variant="subtitle1" sx={{marginRight: "auto"}}>120</Typography>
                  </Box>

                  
                    

              </Grid>

            

              <PostsComponent/>
              {/* <Grid item xs={12} sx={{marginTop: "15px"}}>
                <Paper sx={{ bgcolor: "#F5F5F5", height: "45vh", overflow: "auto" }}>
                  <List>
                  <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
                  <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Titulo
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum is simply dummy text
                          of the printing and typesetting industryr
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: "50%" }}
                      image="cover.png"
                      alt="Live from space album cover"
                    />
                  </Card>

                </Button>


                <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
                  <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Titulo
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum is simply dummy text
                          of the printing and typesetting industryr
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: "50%" }}
                      image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      alt="Live from space album cover"
                    />
                  </Card>

                </Button>

                <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
                  <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Titulo
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum is simply dummy text
                          of the printing and typesetting industryr
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: "50%" }}
                      image="cover.png"
                      alt="Live from space album cover"
                    />
                  </Card>

                </Button>

                
                  </List>
                </Paper>
                
                <Tooltip title="Ver Reportes">
                <Button onClick={(e) => navigate('/Report')}>
                <SummarizeTwoToneIcon fontSize="large" sx={{marginTop:'30%'}}/> 
                </Button>
                </Tooltip>

              </Grid>
              </Grid> */}
              
            </Grid>
            <Tooltip title="Ver Reportes">
                <Button onClick={(e) => navigate('/Report')}>
                <SummarizeTwoToneIcon fontSize="large" sx={{marginTop:'30%'}}/> 
                </Button>
              </Tooltip>
          </Box>
        </Box>
      </React.Fragment>
    );
}
