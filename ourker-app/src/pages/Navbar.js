import React, {useState}from 'react'
import { Image } from 'mui-image';
import Box from "@mui/material/Box";

import {
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Bar
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import { color_one } from '../utils/Themes';
import { Grid } from '@material-ui/core';

export default function NavBar() {
    // AppBar
    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(color_one.primary.secondary),
        "&:hover": {
        backgroundColor: alpha(color_one.primary.secondary, 0.32),
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

    return (
        <ThemeProvider theme={color_one}>
            <Box sx={{ flexGrow: 1, boxShadow: 1, backgroundColor:color_one.primary.secondary }}>
                
                <Toolbar>

                <Image src="/ourker_logo.png"   sx={{ maxWidth: "250px",
                    marginLeft: -200 }}/>
                    
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
        </ThemeProvider>

  )
}
