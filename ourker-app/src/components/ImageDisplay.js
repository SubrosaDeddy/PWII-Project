import React, {Fragment, useState} from 'react'
import { Grid, CardMedia, Card} from '@mui/material'

export default function ImageDisplay(props) {
    const[images, setImages] = useState([props.images]);
    if(images)
    {
        return (
        <Fragment>
            <Grid container sx={{zIndex:"1", width:1, justifyContent:"space-around", width:"85%", mx:"auto", backgroundColor:"rgba(150,150,150,.7)", py:"25px", borderRadius:"15px"}}> 
                {images.map((e) =>{
                    console.log(e);
                    <Grid item xs={3} sx={{zIndex:"1"}}>
                        <Card sx={{zIndex:"1"}}>
                            <CardMedia sx={{height:300, width:"auto", zIndex:"1"}} component="img" image={e}/>
                        </Card>
                    </Grid>
                })}
            </Grid>
        </Fragment>
      )
    }
    else
    {
        return(
            <Fragment/>
            // <Grid container sx={{zIndex:"1", width:1, justifyContent:"space-around", width:"85%", mx:"auto", backgroundColor:"rgba(150,150,150,.7)", py:"25px", borderRadius:"15px"}}>
            //     <Grid item xs={3} sx={{zIndex:"1"}}>
            //         <Card sx={{zIndex:"1"}}>
            //             <CardMedia sx={{height:300, width:"auto", zIndex:"1"}} component="img" image={"https://i.discogs.com/bfNME5iuyRY0TJLxucrcjbkucO95IDKOPi89UruoJ9E/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIyMjQ1/ODUtMTQzMjgxOTM4/OC00NDE0LmpwZWc.jpeg"}/>
            //         </Card>
            //     </Grid>   
            // </Grid>
        )
    }
}
