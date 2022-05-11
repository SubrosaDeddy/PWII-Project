import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { color_one } from "../utils/Themes";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import { useState } from "react";

export default function Search() {
  const navigate = useNavigate();

  const [loc, setLoc] = useState("");

  if (loc != null) {
    console.log("loc");
    console.log(loc);
  }
  //setLoggedUser={setUser}
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, #04448c,#00236f)",
        overflow: "hidden",
        height: "100vh",
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
            <SearchBar setInfoLoc={setLoc} />
          </Grid>
        </Container>
       <Typography>{loc}</Typography>

        <SearchResults />
      </Grid>
    </Box>
  );
}
