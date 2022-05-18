import React, {Fragment, useEffect, useState} from 'react'
import 
{ 
    Container,
    Grid,
    Typography
} from '@mui/material'

import {color_one} from "../utils/Themes";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from '@material-ui/core';  

import { GetCommentsByPost } from '../services/CommentService';

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

export default function CommentSection(props) {
    
    const [comments, setComments] = useState([]);
    var likes = 0;

    useEffect(()=>{
        const fetchComments = async(inputID) =>
        {
            // console.log(inputID);
            const comments = await GetCommentsByPost(inputID);
            setComments(comments);
        }

        fetchComments(props.postID);
    }, []);

    const classes = useStyles();
  
    return (
        <Container sx={{overflowY:"scroll", height:"500px"}}>
            {comments.map((data_i, index) =>{
                likes += data_i.like;
                if(index == comments.length-1)
                    {
                        props.setLikesCount(likes);
                        props.setDislikesCount(comments.length-likes);
                    }
                return(
                    <Fragment>
                        {data_i.comment.map((comm) => {
                            return(
                                <Grid container className={classes.Comment} sx={{}} key={index}>
                                    <Avatar item xs={5} sx={{m:"10px", width:"30px"}} src={data_i._user.profilepicture}/>
                                    <Typography item xs={7} sx={{marginLeft:"30px", my:"auto"}}>{data_i._user.username}</Typography>
                                    <Typography item xs={12} sx={{marginTop:"10px", display:"block"}}>{comm}</Typography>
                                </Grid> 
                            )
                        })}
                    </Fragment>
                )
            })}
        </Container>
  )
}
