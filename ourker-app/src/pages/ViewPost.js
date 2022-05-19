import React, { useEffect, useState } from 'react'
import 
{ 
    Grid,
    Box,
    Typography, 
    TextField,
    CardMedia
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
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Post from '../models/Post';
import { GetPost } from '../services/PostService';
import { InsertComment, GetCommentsByPost, SetLike } from '../services/CommentService';

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


export default function ViewPost(props) {
    const { postID } = useParams();
    const [post, setPost] = useState();
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const checkboxLike = React.useRef(0);

    useEffect(()=>{
        const fetchPost = async(inputID) =>
        {
            const newPost = await GetPost(inputID);
            setPost(newPost);
        }

        fetchPost(postID);
    }, []);

    const classes = useStyles();

    const postComment = async(e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const comment =
        {
           _user: props.user._id,
           comment: [data.get("commentInput")],
           _publication: postID
        }
        InsertComment(comment);
    };

    function pushCheck()
    {
        let setLikeInfo = {
            _publication: postID,
            _user:props.user._id,
            like: checkboxLike.current.checked ? 1 : 0
        }
        SetLike(setLikeInfo);
        if(checkboxLike.current.checked)
            setLikes(likes+1);
        else
            setDislikes(dislikes+1);
    }

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

            <Box sx={{ display: "flex", mx:"auto"}}>
                <Typography variant="subtitle1" sx={{ marginRight: "auto" }}>
                    <ThumbUpAltIcon sx={{color:"green"}}/>
                  {likes}
                </Typography>

                <Typography variant="subtitle1" sx={{ marginRight: "auto" }}>
                    <ThumbDownAltIcon sx={{color:"red"}}/>
                  {dislikes}
                </Typography>
              </Box>

            {post && (
                <SliderImage images={post.photos}/>
            )}
            
            <Box 
                component="form" 
                sx={{
                    display:"flex", 
                    flexDirection:"row", 
                    alignItems:"center", 
                    justifyContent:"space-between", 
                    m:"20px"}} 
                    onSubmit={postComment}>

                <Box sx={{m:"5px"}} onClick={()=>pushCheck()}>
                    <Checkbox
                    label="CircleIcon"
                    icon={<ThumbDownAltIcon sx={{color:"red"}}/>}
                    checkedIcon={ <ThumbUpAltIcon sx={{color:"green"}}/>}
                    id="checkbox-like"
                    inputRef={checkboxLike}
                    />
                </Box>

                <TextField required  name="commentInput" label="Escribe un comentario..." variant="outlined" className={classes.WriteComment} inputProps={{ minLength: 1}}/>
                <Button  type="submit" startIcon={<SendIcon />}></Button>
            
            </Box>
            <CommentSection postID={postID} setLikesCount={setLikes} setDislikesCount={setDislikes}/>
        </Paper>

    </Grid>
  )
}
