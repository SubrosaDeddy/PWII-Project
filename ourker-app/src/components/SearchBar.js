import React from "react";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { color_one } from "../utils/Themes";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SelectOccupations from "./SelectOccupations";
import SelectLocalities from "./SelectLocalities";

export default function SearchBar() {
  const navigate = useNavigate();

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
        <SelectOccupations />
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
        <SelectLocalities />
      </Grid>

      <Grid item xs={12} lg={1} sx={{ p: 0, m: "auto", textAlign: "center" }}>
        <Button onClick={() => navigate("/Search")}>
          <SearchIconWrapper sx={{ position: "relative", my: 1 }}>
            <SearchIcon />
          </SearchIconWrapper>
        </Button>
      </Grid>
    </Grid>
  );
}
