import React, { Fragment } from 'react'
import { Card, CardMedia, Grid } from '@mui/material'
export default function ImageCard(props) {
  return (
    <Fragment>
        <Grid item xs={3} sx={{zIndex:"1"}}>
            <Card sx={{zIndex:"1"}}>
                <CardMedia sx={{height:300, width:"auto", zIndex:"1"}} component="img" image={props.image}/>
            </Card>
        </Grid>
    </Fragment>
  )
}
