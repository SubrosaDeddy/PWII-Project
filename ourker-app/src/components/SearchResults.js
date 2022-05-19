import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import { GetWorkersbyLocalities } from "../services/WorkerService";
import { GetWorkersbyOcupations } from "../services/WorkerService";
import Worker from "../models/Worker";
import { GetWorkersbyLocationsOcupations } from "../services/WorkerService";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function SearchResults(props) {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        height: "55vh",
        overflowY: "scroll",
        marginTop: "25px",
      }}
    >
      <Grid
        container
        sx={{
          px: "30px",
          py: "15px",
          my: "15px",
          borderRadius: "15px",
          overflow: "auto",
        }}
      >
      
        {props.setData &&
          props.setData.arr.map((data, index) => {
            return (
              <LightTooltip title="Ir al perfil" arrow>
                <Grid
                  container
                  onClick={() => navigate("/Perfil", {state: {dataUser: data._userinfo}})}

                  sx={{
                    px: "30px",
                    py: "15px",
                    my: "15px",
                    backgroundColor: "#94C6FF",
                    borderRadius: "15px",
                  }}
                >
                  <Avatar
                    item
                    xs={5}
                    sx={{ m: "5px", width: "30px", height: "30px" }}
                    src={data._userinfo.profilepicture}
                  ></Avatar>
                  <Typography
                    item
                    xs={7}
                    sx={{ marginLeft: "15px", my: "auto" }}
                  >
                    {props.setData && (
                      <strong> {data._userinfo.username}</strong>
                    )}
                  </Typography>
                  <br />
                  <Typography
                    item
                    sx={{ marginLeft: "15px", marginTop: "10px" }}
                  >
                    {data.description}
                  </Typography>
                </Grid>
              </LightTooltip> 
            );
          })}
      </Grid>
    </Container>
  );
}
