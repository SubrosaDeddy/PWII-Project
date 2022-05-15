import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { color_one } from "../utils/Themes";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import SummarizeTwoToneIcon from "@mui/icons-material/SummarizeTwoTone";
import PostsComponent from "../components/PostsComponent";
import { GetWorkerByEmailValidation } from "../services/WorkerService";
import { GetByIdOccupation } from "../services/OcupationsService";
import { GetLocalitiesById } from "../services/LocalitiesServices";

export default function Search(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [dataWorker, setDataW] = useState();
  const [dataOc, setDataOc] = useState();
  const [dataLc, setDataLc] = useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWorker() {
      const worker = await GetWorkerByEmailValidation(props.user.email);

      if (worker._id == null) {
        alert("No eres trabajador");
        const localities = await GetLocalitiesById(props.user._address);
        if(localities) {
          setDataLc(localities);
        }
      } 
      else {
        alert("Si eres trabajador");
        setDataW(worker);
        const occupation = await GetByIdOccupation(worker._ocupations);
        if (occupation) {
          setDataOc(occupation);
        }

        const localities = await GetLocalitiesById(props.user._address);
        if(localities) {
          setDataLc(localities);
        }
      }
    }

    fetchWorker();
  }, []);

  // if (props.user) {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 64px)",
          position: "absolute",
          backgroundImage: "linear-gradient(to top, #04448c,#00236f)",
        }}
      >
        <Box
          sx={{
            width: "70%",
            mx: "auto",
            backgroundColor: color_one.primary.secondary,
            marginTop: "15px",
            padding: "30px",
          }}
        >
          <Grid container sx={{ justifyContent: "space-around" }}>
            <Grid item xs={3} sx={{}}>
              <CardMedia
                component="img"
                sx={{
                  width: 150,
                  height: 150,
                  mx: "auto",
                  maxWidth: 150,
                  maxHeight: 150,
                  borderRadius: "50%",
                }}
                image={props.user.profilepicture}
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ marginRight: "50px", color: "black" }}>
                {props.user.username}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {dataWorker && (dataWorker.description)}
              </Typography>              
            </Grid>

            <Grid
              item
              xs={3}
              sx={{ justifyContent: "space-around", alignContent: "center" }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  maxHeight: 100,
                  maxWidth: 100,
                  borderRadius: "100%",
                }}
                image="Check.png"
                alt="Live from space album cover"
              />
              <CardActions sx={{ mx: "auto" }}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => navigate("/Chat")}
                  sx={{ mx: "auto" }}
                >
                  Contactar
                </Button>
              </CardActions>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ mx: "auto", textAlign: "center", marginTop: "15px" }}
            >
              <Typography component="div" variant="h6">
                {dataOc && (dataOc.title)}, {dataLc && (dataLc.city)}
              </Typography>

              <Box sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: 29,
                    marginLeft: "auto",
                    textAlign: "cente",
                    maxWidth: 29,
                  }}
                  image="Check.png"
                  alt="Live from space album cover"
                />
                <Typography variant="subtitle1" sx={{ marginRight: "auto" }}>
                  120
                </Typography>
              </Box>
            </Grid>
            {dataWorker && (
              <PostsComponent dataW ={props.user._id} />
            )}
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
