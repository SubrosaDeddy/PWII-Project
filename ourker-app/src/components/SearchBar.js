import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { color_one } from "../utils/Themes";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import SelectOccupations from "./SelectOccupations";
import SelectLocalities from "./SelectLocalities";

import { GetLocalities } from "../services/LocalitiesServices";
import {
  GetWorkersbyLocalities,
  GetWorkersbyLocationsOcupations,
} from "../services/WorkerService";
import { GetWorkersbyOcupations } from "../services/WorkerService";
import Search from "../pages/Search";

export default function SearchBar(props) {
  const navigate = useNavigate();

  const [SLoc, setSLoc] = useState("");
  const [SOcup, setSOcup] = useState("");

  const [dataLoc, setDataLoc] = useState([]);
  const [dataOc, setDataOc] = useState([]);
  const [dataLocOc, setDataLocOc] = useState([]);


  const SendData = async () => {
    try {
      // Localidades
      async function fetchLocalities() {
        const infoLocalities = await GetWorkersbyLocalities(SLoc);
        setDataLoc(infoLocalities);
      }

      if (SLoc) {
        fetchLocalities();
      }

      // Ocupaciones
      async function fetchOccupations(){
        const infoOccupation = await GetWorkersbyOcupations(SOcup);
        setDataOc(infoOccupation);
      }

      if(SOcup){
        fetchOccupations();
      }

      // Localidades y ocupaciones
      async function fetchData() {
        const infoData = await GetWorkersbyLocationsOcupations(SLoc, SOcup);
        setDataLocOc(infoData);
      }

      if (SLoc && SOcup) {
          fetchData();
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SendData();
  }, [SLoc, SOcup]);

  function funciones() {

    if (
      SLoc != undefined &&
      SLoc != null &&
      SOcup != undefined &&
      SOcup != null
    ) {
      SendData();
      navigate("/Search", {
        state: { data: dataLocOc, busqueda: SLoc + " y " + SOcup },
      });
    } else {
      
      if (SLoc != undefined && SLoc != null) {
        SendData();
        navigate("/Search", { state: { data: dataLoc, busqueda: SLoc} });
      } 
      if (SOcup != undefined && SOcup !=null) {
          SendData();
          navigate("/Search", { state: { data: dataOc, busqueda: SOcup } });
      }

    }
  }

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <Grid
      xs={11}
      sm={10}
      md={9}
      lg={8}
      xl={7}
      // component="form"
      // noValidate
      // onSubmit={handleSubmit}
      sx={{
        height: "fit-content",
        py: 1,
        borderRadius: 5,
        backgroundColor: color_one.primary.secondary,
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Grid
        item
        xs={11}
        sm={11}
        md={6}
        lg={5}
        xl={5}
        sx={{ p: "auto", m: "auto", px: 1, textAlign: "center" }}
      >
        <SelectOccupations getOcupValue={setSOcup} />
      </Grid>

      <Grid
        item
        xs={11}
        sm={11}
        md={6}
        lg={5}
        xl={5}
        sx={{ p: "auto", m: "auto", px: 1, textAlign: "center" }}
      >
        <SelectLocalities getLocValue={setSLoc} />
      </Grid>

      <Grid item xs={12} lg={1} sx={{ p: 0, m: "auto", textAlign: "center" }}>
        <Button onClick={() => funciones()}>
          <SearchIconWrapper sx={{ position: "relative", my: 1 }}>
            <SearchIcon />
          </SearchIconWrapper>
        </Button>
      </Grid>
    </Grid>
  );
}
