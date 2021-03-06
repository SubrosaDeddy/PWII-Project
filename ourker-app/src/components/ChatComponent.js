import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState, useEffect, useRef} from "react";
import { color_one } from "../utils/Themes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GetChatsUsers } from "../services/ChatService";

export default function ChatComponent(props) {
  const [chats, setChats] = useState([]);
  const listRef = useRef(null);

  async function fetchChat(){
    const data_chat = await GetChatsUsers(props.user._id, props.userChat._id);
    setChats(data_chat);
  }

  // al cambiar el usuario se obtienen los mensajes con el usuario seleccionado
  useEffect(() =>{
      fetchChat();
  }, [props.userChat._id, props.refresh])

  // al obtener nuevos mensajes hacemos scroll
  useEffect(() =>{
      if (!!listRef) {
          listRef.current?.scrollTo(0, 99999)
      }
  }, [chats])
  
  return (
    <List sx={{ overflowY: "scroll", height: "85%" }} ref={listRef}>

      {chats.ChatMsgS != undefined && (
        chats.ChatMsgS.map((data, index) =>{
          return(
            <Fragment key={index}>
              {data._usersend === props.user._id && (
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
                    <Typography>{data.content}</Typography>
                    <Typography>{data.time}</Typography>
                  </Box>
                </Grid>
              </ListItem>
              )}

              {data._userreceive === props.user._id && (
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
                    <Typography>{data.content}</Typography>
                    <Typography>{data.time}</Typography>
                  </Box>
                </Grid>
              </ListItem>
              )}

            </Fragment>
          )
        })
      )}
     
    </List>
  );
}
