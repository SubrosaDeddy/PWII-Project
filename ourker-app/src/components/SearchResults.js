import {Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

export default function SearchResults() {
    const navigate = useNavigate();
    return (
    <Container sx={{height:"650px", overflowY:"scroll", marginTop:"25px"}}>
    <Grid container sx={{px:"30px", py:"15px", my:"15px", borderRadius:"15px"}}>
    </Grid>

    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong> </Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>
    
    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>

    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container   onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>
    
    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>

    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>
    
    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong> Paquito Perez Papitas Papas </strong></Typography>
      <Typography item sx={{marginTop:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
    </Grid>
    </LightTooltip>

  </Container>
  )
}
