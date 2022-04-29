import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';

import { ThemeProvider} from "@mui/material/styles";

import CardMedia from "@mui/material/CardMedia";

import {color_one} from "../utils/Themes";
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "../components/SearchBar";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    
});

export default function Home() {


const navigate = useNavigate();

  return (

    <ThemeProvider theme={color_one}>

        <Grid sx={{backgroundColor:color_one.primary.main, m:0, py:8, px:1, width:1, alignItems:"center", justifyContent:"center"}}>
            <Typography item xs={11} sm={10} md={9} lg={8} xl={7} variant="h4" component="h4" sx={{color:color_one.primary.secondary, mb:2, mx:"auto", textAlign:"center", p:"auto"}}>
            Te ayudamos a encontrar a la persona indicada para tu trabajo.
            </Typography>
            <SearchBar/>
        </Grid>

        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:5, backgroundColor:color_one.primary.secondary}}>
            <Typography variant="h4" component="h4">Si tienes trabajo por hacer ¡Ourker está contigo!</Typography>
            <Typography>Miles de trabajadores disponibles para que encuentres el que se ajuste mejor a tus necesidades</Typography>

            <Grid sx={{alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", width:"fit-content", display:"flex", pt:5, pb:1, px:"auto", textAlign:"center"}}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{alignItems:"center", alignContent:"center", textAlign:"center", p:"auto", mb:1, display:"flex", justifyContent:"center"}}>
                    <CardMedia component="img" src="/work_figures.jpg" sx={{height:300, width:"auto", borderRadius:3, m:"auto", display:"block"}}/>
                </Grid>
                <Grid item xs={11} sm={11} md={10} lg={6} xl={6} sx={{alignItem:"center", px:"auto", mx:"auto"}}>
                    <Box sx={{display:"flex", flexDirection:"column", alignItems:"left", justifyContent:"space-between", width:1, mt:0}}>
                        <Typography sx={{px:1, fontSize:20, fontWeight:"bold"}}>Te ayudamos a encontrar un trabajador que resuelva tu problema</Typography>  
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Busca trabajadores para tu proyecto planeado</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Profesionistas cerca de tu area</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Crea tu perfil y comienza a buscar profesionistas</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Compara, contacta y califica trabajos</Typography>    
                        <Typography sx={{px:1, fontSize:18, fontWeight: "lighter"}}><CheckIcon sx={{color: color_one.primary.main}}/> Completamente gratis</Typography>    
                        <Button onClick={() => navigate('/SignIn')} color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.primary.main, borderRadius:5, width:200, mx:"auto", color:color_one.primary.secondary, mt:2}}>Crea una cuenta</Button>
                    </Box>  
                </Grid>
            </Grid>
            
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"space-between", justifyContent:"space-between", width:"90%", padding:5}}>
                <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto"}}>
                    Publica tu trabajo en el portal de freelancing de mayor popularidad en México.
                </Typography>
                <Grid sx={{alignItems:"space-between", justifyContent:"center", width:1, p:3, flexWrap:"wrap", display:"flex", textAlign:"center"}}>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography>Publica, comparte y ofrece tu trabajo y/o servicios completamente gratis en la zona en que te encuentres para facilitar tus traslados y disminuir tiempos.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography>Si trabajas solo o en compañia, eres freelancer, parte de un taller, o tienes un proyecto en mente y necesitas colaboradores, encuentra y se encontrado por usuarios en los alrededores de tu ubicacion preferida.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{m:"auto"}}>
                        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:1}}>
                            <CheckIcon sx={{color:color_one.primary.main, fontSize:75}}/>
                            <Typography> Compara, contacta, califica resultados y compartelos para futuros usuarios. Observa la lista de trabajos previos de los Profesionistas y elige el mas conveniente para ti.</Typography>
                        </Box>
                    </Grid>
                </Grid>     
                <Button onClick={() => navigate('/CreatePost')} color="primary" elementType="Button" size="medium" variant="contained" sx={{backgroundColor:color_one.primary.main, borderRadius:5, width:300, mx:"auto", color:color_one.primary.secondary}}>Publica gratis tu trabajo</Button>
            </Box> 
        </Box>
    </ThemeProvider>
  );
}
