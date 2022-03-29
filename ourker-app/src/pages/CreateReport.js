import { Typography } from '@material-ui/core'
import { Autocomplete, Box, Card, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React from 'react'

export default function CreateReport() {
    const options = ["Option 1", "Option 2"];
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");
  
    return (
        <Grid
        spacing={1}
        >
            <Box height={'15px'}/>
            <Paper elevation={3} sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 800,
                flexGrow: 1,
                top: 9,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>

                <Grid container spaicing= {1} xl={10} m={'auto'} sx={{ display:"flex", alignItems:"center"}}>
                    
                    <Box component="form" noValidate onSubmit={""}>
                            
                            <Box height={'15px'}/>
                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                                }}
                                id="combo-box-demo"
                                options={options}
                                sx={{mx:"auto"}}
                                renderInput={(params) => (
                                <TextField {...params} label="Categoria"/>
                            )}/>
                        
                        <TextField margin="normal" id="Modelo" label="Modelo" variant="outlined" required  fullWidth/> 
                            
                            

                        <TextField margin="normal" id="Titulo" label="Titulo" variant="outlined" required  fullWidth/> 
                        <TextField margin="normal" id="outlined-basic" label="Descripción" variant="outlined" required multiline fullWidth maxRows={5} rows={5}/> 

                        <TextField margin="normal" id="Modelo" label="Parte" variant="outlined" required  /> 

                        {/* <TextField margin="normal" id="Modelo" label="Titulo" variant="outlined" required />  */}
                        
                    </Box>
      

                    
                </Grid>
            </Paper>
        </Grid>
  )
}
