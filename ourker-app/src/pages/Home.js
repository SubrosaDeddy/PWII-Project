import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Autocomplete,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Bar
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// Background
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export default function Home() {
    // AppBar
  const color_one = createTheme({
    palette: {
      primary: {
        main: "#eceff1",
      },
    },
  });

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.32),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

    //   Autocomplete
  const options = ['Option 1', 'Option 2'];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  
  return (
    // <Container>
    <ThemeProvider theme={color_one}>
      {/* <AppBar position='static' color='primary'> */}
      <Box sx={{ flexGrow: 1, boxShadow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ourker
          </Typography>

          <Stack spacing={1} direction="row">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Button color="inherit" variant="outlined">
              Registrate
            </Button>
            <Button color="inherit" variant="outlined">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </Box>

      <Box fullWidth sx={{ m: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params}
                label="Trabajo"/>} 
                />
          </Grid>

          <Grid item xs={8}>
            <Card fullWidth sx={{ m: 1 }}>
              <CardMedia
                component="img"
                alt="background"
                // height="lg"
                image="https://img.freepik.com/vector-gratis/grupo-trabajadores-oficina-dibujos-animados-lindo-ilustracion-plana_74855-18345.jpg?w=1060"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* </AppBar> */}
    </ThemeProvider>

    // </Container>
  );
}
