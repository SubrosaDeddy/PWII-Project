import React, {Fragment, useState} from 'react'
import { Grid, CardMedia, Card, Typography, Paper } from '@mui/material'

export default function ImageDisplay(props) {
    let imgArray = [];
    // if(props.images.length)
    // {
    //     props.images.forEach(e => {
    //         imgArray.push(e);
    //     });
    // }

    // if(imgArray.length)
    // {
        return (
        <Fragment>
            <Grid container sx={{zIndex:"1", width:1, justifyContent:"space-around", width:"85%", mx:"auto", backgroundColor:"rgba(150,150,150,.7)", py:"25px", borderRadius:"15px"}}>
                
            <Grid item xs={3} sx={{zIndex:"1"}}>
                        <Card sx={{zIndex:"1"}}>
                            <CardMedia sx={{height:300, width:"auto", zIndex:"1"}} component="img" image={props.images}/>
                        </Card>
            </Grid>
                {/* {imgArray.map((e) => (
                    
                ))} */}
            </Grid>
        </Fragment>
      )
    // }
    // else
    // {
    //     return(
    //         <Fragment/>
    //     )
    // }
}
