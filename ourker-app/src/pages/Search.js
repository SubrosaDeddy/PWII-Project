import {Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {color_one} from "../utils/Themes";
import SearchBar from '../components/SearchBar';
import { Image } from 'mui-image';


export default function Search() {
  
  return (
    <Box sx={{backgroundImage: "linear-gradient(to top, #04448c,#00236f)", overflow:"hidden", height:"100vh", width:"100%", m:0, p:0}}>
      <Grid container sx={{backgroundColor:color_one.primary.secondary, width:"70%", m:"auto", marginTop:"10px", padding:"30px"}}>
        <Container sx={{borderWidth:"100px", borderColor:"black"}}>
        <Grid sx={{backgroundColor:color_one.primary.main, m:0, py:3, px:1, width:1, alignItems:"center", justifyContent:"center"}}>
          <SearchBar/>
          </Grid>
        </Container>
        <Container>


        <Grid container sx={{px:"30px", py:"15px", my:"15px", borderRadius:"15px"}}>
       

        </Grid>

          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong> </Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
          
          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
          
          <Grid container sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
            <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
            <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
            <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}