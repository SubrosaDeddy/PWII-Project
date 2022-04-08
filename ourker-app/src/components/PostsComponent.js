import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import { color_one } from "../utils/Themes";

export default function PostsComponent() {
  return (
    <Grid item xs={12} sx={{marginTop: "15px"}}>
        <Paper sx={{ bgcolor: "#F5F5F5", height: "45vh", overflow: "auto" }}>
          <List>
          <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
          <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Titulo
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum is simply dummy text
                  of the printing and typesetting industryr
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "50%" }}
              image="cover.png"
              alt="Live from space album cover"
            />
          </Card>

        </Button>


        <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
          <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Titulo
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum is simply dummy text
                  of the printing and typesetting industryr
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "50%" }}
              image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Live from space album cover"
            />
          </Card>

        </Button>

        <Button href="ViewPost" sx={{ justifyContent: "center", display: "center" }}>
          <Card sx={{ display: "flex", width: "70%", justifyContent: "space-between"}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Titulo
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum is simply dummy text
                  of the printing and typesetting industryr
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "50%" }}
              image="cover.png"
              alt="Live from space album cover"
            />
          </Card>

        </Button>

        
          </List>
        </Paper>
    </Grid>
  )
}
