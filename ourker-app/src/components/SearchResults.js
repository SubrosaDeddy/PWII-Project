import { useState, useEffect } from "react";
import {Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';


import { GetWorkersbyLocalities } from "../services/WorkerService";
import { GetWorkersbyOcupations } from "../services/WorkerService";
import Worker from "../models/Worker"
import { GetWorkersbyLocationsOcupations } from "../services/WorkerService";


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

export default function SearchResults(props) {

    //console.log(props.work);
    const navigate = useNavigate();
    const [dataWorker, setDataW] = useState();

    // Info del worker
  useEffect(() =>{
    async function fetchWorker(){
      const worker = await GetWorkersbyLocationsOcupations(props.user._id)

      if(worker._id == null){
        console.log("no hay nada");
      }else{
        setDataW(worker);
        console.log(setDataW);
      }
    }

    fetchWorker();

  }, [])


    return (
    <Container sx={{height:"650px", overflowY:"scroll", marginTop:"25px"}}>
    <Grid container sx={{px:"30px", py:"15px", my:"15px", borderRadius:"15px"}}>
    </Grid>

    <LightTooltip  title="Ir al perfil"  arrow>
    <Grid container  onClick={() => navigate('/Perfil')} sx={{px:"30px", py:"15px", my:"15px", backgroundColor:"#94C6FF", borderRadius:"15px"}}>
      <Avatar item xs={5} sx={{m:"5px", width:"30px", height:"30px"}}  src="/broken-image.jpg"></Avatar>
      <Typography item xs={7} sx={{marginLeft:"15px", my:"auto"}}> <strong>  defaultValue={props.user.fullname} </strong> </Typography>
      <Typography item sx={{marginTop:"10px"}}> defaultValue={dataWorker.description}</Typography>
    </Grid>
    </LightTooltip>

  
     </Container>
      )
}
