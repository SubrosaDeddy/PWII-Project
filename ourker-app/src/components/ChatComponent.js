import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";
import { color_one } from "../utils/Themes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     allVariants: {
//       fontfamily: "Lexend Deca",
//       textTransform: "none",
//       fontSize: 25,
//       fontWeight: 700,
//     },
//   },

//   right: {
//     borderRadius: 1,
//     bgcolor: "#2777D4",
//   },
// });

export default function ChatComponent(props) {

  // console.log("Chats");
  // console.log(props.chat);

  let chatArray = [props.chat] 

  return (
    // <ThemeProvider theme={theme}>
    // <ThemeProvider theme={theme}>
       <List sx={{ overflowY: "scroll", height: "85%" }}>

       
      {/* {props.chat} */}

      <ListItem key="1">
        <Grid container>
          <Box
            component={Paper}
            elevaton={1}
            sx={{
              background: color_one.primary.sendMessage,
              borderRadius: 7,
              padding: "1rem",
              marginRight: 0,
              marginLeft: "auto",
              display: "inline",
            }}
          >
            <Typography>
              Hola, quiero pedirle información sobre el trabajo de carpintero
            </Typography>
            <Typography>09:31</Typography>
          </Box>
        </Grid>
      </ListItem>

      <ListItem key="2">
        <Grid container>
          <Box
            component={Paper}
            elevaton={1}
            sx={{
              background: color_one.primary.reciveMessage,
              borderRadius: 7,
              padding: "1rem",
              marginRight: "auto",
              marginLeft: 0,
              display: "inline",
            }}
          >
            <Typography>
              Si, claro en seguida le mando la información ads{" "}
            </Typography>
            <Typography>09:31</Typography>
          </Box>
        </Grid>
      </ListItem>
      </List>
      
    // <TextField
    //           id="outlined-textarea"
    //           label="Escribe un mensaje"
    //           multiline
    //           name="message"

    //           fullWidth
    // />
  );
}
