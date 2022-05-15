import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { color_one } from "../utils/Themes";
import SearchBar from "../components/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import { useEffect, useState, useRef } from "react";
import { GetWorkersbyLocalities } from "../services/WorkerService";

import { createTheme, ThemeProvider } from "@mui/material/styles";


export default function Search(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [loc, setLoc] = useState([]);
  const [occ, setOc] = useState(null);

  const [dataL, setDataLoc] = useState([]);
  const [dataOc, setDataOc] = useState([]);

  let Arr = [];
  if (location.state.data != undefined) {
    console.log(location.state.data);
  }


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
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, #04448c,#00236f)",
        overflow: "hidden",
        minHeight: "calc(100vh - 64px)",
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: color_one.primary.secondary,
          width: "70%",
          m: "auto",
          marginTop: "10px",
          padding: "30px",
        }}
      >
        <Container sx={{ borderWidth: "100px", borderColor: "black" }}>
          <Grid
            sx={{
              backgroundColor: color_one.primary.main,
              m: 0,
              py: 3,
              px: 1,
              width: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchBar setInfoLoc={setLoc} setInfoOcc={setOc} />
          </Grid>
        </Container>
        {location.state.busqueda != "" && (
          <Typography
          fontfamily= "Lexend Deca"
            variant="h4"
            sx={{ marginLeft: "20px",  fontfamily: "Lexend Deca", textTransform: "uppercase", textAlign:"center", fontWeight:"bold", fontSize:25, margin:"auto"}}
          >
            {" "}
            Buscando por: {location.state.busqueda}
          </Typography>
        )}
        <p></p>
        {location.state.data != "" && (
          <Typography
          fontfamily= "Lexend Deca"
            variant="h4"
            item
            sx={{ marginLeft: "40px", fontfamily: "Lexend Deca", textTransform: "uppercase", textAlign:"center", fontWeight:"bold", fontSize:25, margin:"auto" }}
          >
            {" "}
            Resultados: {location.state.data.arr.length}
          </Typography>
        )}
        <SearchResults setData={location.state.data} />
      </Grid>
    </Box>
    </ThemeProvider>
  );
}
