import React, { useEffect, useState } from 'react'
import 
{ 
    Grid,
    Box,
    Typography, 
    TextField
} from '@mui/material'
import { Paper } from '@mui/material';
import {color_one} from "../utils/Themes";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@mui/icons-material/Send';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SliderImage from "../components/SliderImages"
import CommentSection from '../components/CommentSection';
import { useParams } from "react-router-dom";

import Post from '../models/Post';
import { GetPost } from '../services/PostService';

const useStyles = makeStyles({
    WriteComment:
    {
        width:"90%"
    },
    Comment:
    {
        width:"auto",
        margin:"20px",
        padding:"20px",
        backgroundColor:"#DBDBDB",
        borderColor:color_one.primary.main,
        borderRadius:"10px"
    },
    Description:
    {
        marginBottom: "30px",
        paddingLeft:"30px",
        paddingRight:"30px"
    }
});


export default function ViewPost() {
    const { postID } = useParams();
    const [post, setPost] = useState();
    useEffect(()=>{
        const fetchPost = async(inputID) =>
        {
            const newPost = await GetPost(inputID);
            setPost(newPost);
        }

        fetchPost(postID);
    }, []);

    const classes = useStyles();

    return (
    <Grid sx={{backgroundImage:"linear-gradient(to bottom, #2777D4,#1D5AA1)", minHeight:"calc(100vh - 64px)"}}>
        <Box height={'15px'}/>
        <Paper elevation={3} sx={{p:2, margin: 'auto', maxWidth: "50%", flexGrow: 1, top: 9, backgroundColor: (theme) =>theme.palette.mode === 'dark' ? '#1A2027' : '#fff'}}>
            {post && (<Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>
                            {post.date}
            </Typography>)}

            <Grid container spacing={1} xl={10} m={'auto'} sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                <Box component="form" noValidate>
                    {post && (
                        <Typography sx={{fontWeight:"bold", fontSize:25, margin:"auto", textAlign:"center"}}>
                            {post.title}
                        </Typography>
                    )}
                </Box>
            </Grid>

            <Grid>
                <Box component="form" noValidate sx={{display: "flex", alignItems: "center"}}>
                    {post && (
                        <Typography sx={{ fontSize:14, margin:"auto", textAlign:"left"}}>Trabajador: {post._workerinfo._userinfo.username}</Typography>
                        )}
                    {post && (
                        <Typography sx={{ fontSize:14, margin:"auto", textAlign:"right"}}>Categoría: {post._category.name}</Typography>
                    )}
                </Box>
            </Grid>

            <Grid container spacing={1} xl={10} m={'auto'} className={classes.Description} sx={{display: "flex", alignItems: "center", justifyContent:"center", marginTop:"30px", width:"100%"}}>
                {post && (
                    <Typography variant="body1" gutterBottom>
                        {post.description}
                    </Typography>
                )}
            </Grid>

            {post && (
                <SliderImage images={post.photos}/>
            )}
            
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", m:"20px"}}>
                <Box sx={{m:"5px"}}> <ThumbUpAltIcon sx={{color:"green"}}/> <ThumbDownAltIcon sx={{color:"red"}}/></Box> 
                <TextField id="outlined-basic" label="Write a comment..." variant="outlined" className={classes.WriteComment}/>
                <SendIcon sx={{mx:"10px", color:color_one.primary.main, fontSize:"30px"}}/>
            </Box>

            <CommentSection/>
        </Paper>

    </Grid>
  )
}
