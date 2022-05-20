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
import Container from '@mui/material/Container';

import { useNavigate } from "react-router-dom";
import { GetPostsWorker } from "../services/PostService";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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


  const theme = createTheme({
    typography: {
      allVariants: {
        fontfamily: "Lexend Deca",
        textTransform: "none",
        fontSize: 14,
        fontWeight: 700,
      },
    },
  });

  

  return (
    <ThemeProvider theme={theme}>
    <Grid item xs={12} sx={{marginTop: "15px"}}>
        <Paper sx={{ bgcolor: "#F5F5F5", height: "45vh", overflow: "auto" }}>
          {(posts.length && 
            <List>
              {posts.map((data, index)=>{
                  return (
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="10vh"
                  >
                    <Button key={index} sx={{ justifyContent: "center", width:"100%"}} onClick={(e) => navigate(`/ViewPost/${data._id}`)}>
                      <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between", mx:"auto"}}>
                        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
                          <CardContent sx={{ flex: "1 0 auto" }}>
                            <Typography component="div" variant="h5" fontfamily= "Lexend Deca">
                              {data.title}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              component="div"
                              fontfamily= "Lexend Deca"
                            >
                              {data.description}
                            </Typography>
                          </CardContent>
                        </Box>
                        <CardMedia
                          component="img"
                          sx={{ width: "50%", minWidth: "50%", maxHeight: "140px", minHeight: "140px"}}
                          image={data.photos[0]}
                          alt="Post Image"
                          
                        />
                      </Card>
                    </Button>
                    </Box>
                  )
                })}
            </List>
          )}

        </Paper>
    </Grid>
    </ThemeProvider>
  )
}
