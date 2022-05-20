import React, { Fragment, useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { color_one } from "../utils/Themes";
import PublishTwoToneIcon from "@mui/icons-material/PublishTwoTone";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useLocation } from "react-router-dom";
import Chat from "../models/Chat";
import ChatComponent from "../components/ChatComponent";
import { GetChatsUsers, GetListChat } from "../services/ChatService";
import ListChats from "../components/ListChats";

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

export default function ChatWorker(props) {
  
  const location = useLocation();
  const navigate = useNavigate();
  const textInput = React.useRef(null);
  const [refresh, doRefresh] = useState(0);

  const [value, setValue] = useState("");
  const [chatData, setChatData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const today = new Date();
    const hm_time = today.getHours() + ":" + today.getMinutes();

    const data = new FormData(event.target);

    if (data.get("message") == "") {
      alert("mensaje vacío");
    } else {
      let chat;
      if(location.state.idUserProfile != null){
          chat = {
          _usersend: props.user._id,
          _userreceive: location.state.idUserProfile._id,
          content: data.get("message"),
          time: hm_time,
          };
      }else{
        chat = {
          _usersend: props.user._id,
          _userreceive: chatData._id,
          content: data.get("message"),
          time: hm_time,
        };
      }
      

      let newChat = new Chat(chat);

      const res = newChat.sendMessageDB();

      res
        .then((value) => {
          if (!value.level) {
            doRefresh(refresh + 1)
            alert("mensaje mandado");
            textInput.current.value = "";
          } else {
            alert("no se pudo mandar el mensaje");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("no se pudo mandar el mensaje");
        });
    }


  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ backgroundImage: color_one.primary.linear }}>
        <Grid
          item
          xs={4}
          style={{
            padding: "20px",
            border: 1,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Box
            sx={{
              backgroundColor: color_one.primary.secondary,
              border: 1,
              borderColor: "black",
            }}
          >

            <Typography 
            sx={{
              minHeight: "45px",
              textAlign: "center"
            }}
            >
              Lista de contactos
            </Typography>
          </Box>

          <Box
            sx={{
              border: 1,
              borderTop: 0,
              borderColor: "#D0D0D0",
              pr: 1,
              backgroundColor: color_one.primary.secondary,
              borderColor: "black",
            }}
          >

              <ListChats user={props.user} setChatInfo={setChatData}/>
          </Box>
          {}
          <input hidden name="dataId"  id="dataId"></input>
          
        </Grid>

        <Grid item xs={8}>
          <Box height={"20px"} />

          <Grid
            item
            xs={12}
            sx={{ backgroundColor: color_one.primary.secondary }}
          >
            <Box
              sx={{ border: 1, borderTop: 1, borderColor: "#D0D0D0", pr: 1 }}
              height={"70vh"}
            >
              <ListItem
                alignItems="center"
                sx={{
                  backgroundColor: color_one.primary.main,
                  color: "white",
                }}
              >
                <ListItemAvatar>
                  {chatData != undefined && (
                     <Avatar src={chatData.profilepicture} />
                  )}

                  {location.state.idUserProfile != null && chatData == undefined &&(
                    <Avatar src={location.state.idUserProfile.profilepicture} />
                  )}

                  {location.state.idUserProfile == null && chatData == undefined &&(
                    <Avatar src="" />
                  )}

                </ListItemAvatar>

                  {location.state.idUserProfile != null && chatData == undefined &&(
                    <ListItemText primary={location.state.idUserProfile.username} />
                  )}

                  {chatData != undefined && (
                     <ListItemText primary={chatData.username} />
                  )}

                  {location.state.idUserProfile == null && chatData == undefined && (
                     <ListItemText primary="Selecciona un usuario" />
                  )}

              </ListItem>

              {location.state.idUserProfile != null && chatData == undefined &&(
                    <ChatComponent user={props.user} userChat={location.state.idUserProfile} refresh={refresh} />
              )}

              {chatData != null && (
                <ChatComponent user={props.user} userChat={chatData} refresh={refresh} />
              )}

             
            </Box>
          </Grid>
                
          <Grid
            item
            xs={12}
            sx={{
              height: "auto",
              backgroundColor: color_one.primary.secondary,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "grid",
                gridAutoColumns: "1fr",
                gap: 1,
              }}
            >
              <Box sx={{ gridColumn: "span 18" }}>
                <TextField
                  id="outlined-textarea"
                  inputRef={textInput}
                  label="Escribe un mensaje"
                  multiline
                  name="message"
                  required
                  fullWidth
                  inputProps={{ minLength: 1}}
                />
              </Box>

              <Box sx={{ gridColumn: "19/20", margin: "auto" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  startIcon={<SendIcon />}
                >
                  Mandar
                </Button>
              </Box>

              
              
            </Box>
          </Grid>

          <Divider />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
