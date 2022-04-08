import React from 'react'
import { Button, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SliderImages from '../components/SliderImages'


export default function Report() {

  return (
    <Grid spacing={2} style={{
        backgroundImage: 'url(/fondo_gradiente.jpg)',  minHeight:"calc(100vh - 64px)"}}>
      
        <Box height={'15px'}/>
        <Paper elevation={3} sx={{
            p:2,
            margin: 'auto',
            maxWidth: 800,
            flexGrow: 1,
            top: 9,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
            <Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>
                        29/03/2022
            </Typography>

            <Grid container spacing={1} xl={10} m={'auto'} sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                <Box component="form" noValidate onSubmit={""}>
                    <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto", textAlign:"center"}}>
                        Titulo
                    </Typography>
                </Box>
            </Grid>

            <Grid>
                <Box component="form" noValidate onSubmit={""} sx={{display: "flex", alignItems: "center"}}>
                    <Typography sx={{ fontSize:14, margin:"auto", textAlign:"left"}}>Trabajador: Pepito</Typography>
                    <Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>Categoria: Muebles</Typography>
                </Box>

            </Grid>

            <Box height={'30px'}/>
            <Grid container spacing={1} xl={10} m={'auto'} sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                </Typography>
            </Grid>

            <Box height={'20px'}/>
            <Box padding={3}>
            <SliderImages/>
            </Box>
            
            
        </Paper>

    </Grid>
  )

}

