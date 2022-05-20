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
            const comments = await GetCommentsByPost(inputID);
            setComments(comments);
        }

        fetchComments(props.postID);
    });

    const classes = useStyles();
  
    return (
        <Container sx={{overflowY:"scroll", height:"500px"}}>
            {comments.map((data_i, index_i) =>{
                likes += data_i.like;
                if(index_i == comments.length-1)
                {
                    props.setLikesCount(likes);
                    props.setDislikesCount(comments.length-likes);
                }
                return(
                    <Fragment>
                        {data_i.comment.map((comm, index_j) => {
                            return(
                                <Grid container spacing={1} columns={1} className={classes.Comment} key={`${index_i}${index_j}`}>
                                    <Avatar item xs={5} sx={{m:"10px", width:"30px"}} src={data_i._user.profilepicture}/>
                                    <Grid item xs>
                                        <Typography item xs={7} sx={{marginLeft:"30px", my:"auto" }}>{data_i._user.username}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography item xs={12} sx={{marginTop:"10px",display:"block"}}>{comm}</Typography>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Fragment>
                )
            })}
        </Container>
  )
}
