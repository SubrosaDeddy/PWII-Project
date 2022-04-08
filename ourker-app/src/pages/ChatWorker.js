import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { color_one } from "../utils/Themes";
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';
import CreateReport from './CreateReport';
import Tooltip from '@mui/material/Tooltip';


const theme = createTheme({
  typography: {
    allVariants: {
      fontfamily: "Lexend Deca",
      textTransform: "none",
      fontSize: 25,
      fontWeight: 700,
    },
  },

  right: {
    borderRadius: 1,
    bgcolor: "#2777D4",
  },
});

export default function ChatWorker() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{background: color_one.primary.sendMessage}}>
        <Grid item xs={4} style={{ padding: "20px", border: 1,background: color_one.primary.secondary }}>
          <TextField
            id="outlined-search"
            label="Buscar contacto"
            type="search"
            
            fullWidth
          />

          <Box sx={{ border: 1, borderTop: 0, borderColor: "#D0D0D0", pr: 1 }}>
            <List sx={{ width: "100%", maxWidth: 560 }}>
              <ListItem button alignItems="flex-start" sx={{ m: 1 }}>
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Fernando" />
              </ListItem>

              <Divider variant="inset" component="li" />

              <ListItem button alignItems="flex-start" sx={{ m: 1 }}>
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Ivan" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem button alignItems="flex-start" sx={{ m: 1 }}>
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Daniel" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box height={"20px"} />
          <Box
            sx={{ border: 1, borderTop: 1, borderColor: "#D0D0D0", pr: 1,background: color_one.primary.secondary }}
            height={"70vh"}
          >
            <ListItem
              alignItems="center"
              sx={{
                m: 1,
                backgroundColor: color_one.primary.main,
                color: "white",
              }}
            >
              <ListItemAvatar>
                <Avatar src="/broken-image.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Fernando" />
            </ListItem>
            
            <List sx={{overflowY:"scroll", height:"85%"}}>
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
                      Hola, quiero pedirle información sobre el trabajo de
                      carpintero
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
                      Si, claro en seguida le mando la información{" "}
                    </Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>
              
              <ListItem key="3">
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
                    <Typography>Gracias, espero su mensaje!</Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>

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
                      Hola, quiero pedirle información sobre el trabajo de
                      carpintero
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
                      Si, claro en seguida le mando la información{" "}
                    </Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>
              
              <ListItem key="3">
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
                    <Typography>Gracias, espero su mensaje!</Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>

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
                      Hola, quiero pedirle información sobre el trabajo de
                      carpintero
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
                      Si, claro en seguida le mando la información{" "}
                    </Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>
              
              <ListItem key="3">
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
                    <Typography>Gracias, espero su mensaje!</Typography>
                    <Typography>09:31</Typography>
                  </Box>
                </Grid>
              </ListItem>
            </List>
          </Box>

          {/* <Box sx={{gridArea: 'main'}}>
            <TextField
              id="outlined-textarea"
              label="Escribe un mensaje"
              multiline
            />
            
          </Box>
          <Box sx={{gridArea: 'sidebar'}}>
            <Button variant="outlined" startIcon={<SendIcon />}>
              Mandar
            </Button>
          </Box> */}
          <Box
            sx={{
              display: "grid",
              gridAutoColumns: "1fr",
              gap: 1,
            }}
          >
            
                   
            
            <Box sx={{gridColumn: 'span 18',background: color_one.primary.secondary}}>
            <TextField
              id="outlined-textarea"
              label="Escribe un mensaje"
              multiline
              fullWidth
            />
            
          </Box>
          
          <Box sx={{gridColumn: '19/20', margin: 'auto', background: color_one.primary.secondary}}>
            <Button variant="outlined" startIcon={<SendIcon />}>
              Mandar
            </Button>
            
          </Box> 
          <Box sx={{gridColumn: '20/20',  background: color_one.primary.secondary}}>
          <Tooltip title="Crear Reporte">
          <Button href="CreateReport">
          <PublishTwoToneIcon sx={{marginTop:'30%'}}/> 
          </Button>
          </Tooltip>

          </Box>
            {/* The second non-visible column has width of 1/4 */}
          </Box>

          <Divider />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
