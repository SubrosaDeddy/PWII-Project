import { ThemeProvider, createTheme } from "@mui/material/styles";

const color_one = createTheme({
    primary: 
    {
      main: "#2777D4",
      secondary:"#FEFEFE",
      details:"#A7C3D6",
      sendMessage:"#94C6FF", 
      reciveMessage: "#E6F5FF"
    },
});

export {color_one};

