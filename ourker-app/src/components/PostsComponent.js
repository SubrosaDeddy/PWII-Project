// import * as React from "react";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";

import { GetPostsWorker } from "../services/PostService";

export default function PostsComponent(props) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function fetchPosts(id)
    {
      const postsData = await GetPostsWorker(id);
      setPosts(postsData);
    }
    fetchPosts(props.dataW);
  }, []);

  return (
    <Grid item xs={12} sx={{marginTop: "15px"}}>
        <Paper sx={{ bgcolor: "#F5F5F5", height: "45vh", overflow: "auto" }}>
          <List>
            {posts.map((data, index)=>{
                return (
                  <Button key={index} sx={{ justifyContent: "center"}} onClick={(e) => navigate(`/ViewPost/${data._id}`)}>
                    <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between", mx:"auto"}}>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography component="div" variant="h5">
                            {data.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                          >
                            {data.description}
                          </Typography>
                        </CardContent>
                      </Box>
                      <CardMedia
                        component="img"
                        sx={{ width: "50%", maxWidth: "50%" }}
                        image={data.photos[0]}
                        alt="Live from space album cover"
                      />
                    </Card>
                  </Button>
                )
              })}
          </List>
        </Paper>
    </Grid>
  )
}
