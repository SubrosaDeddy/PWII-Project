import Typography from "@mui/material/Typography";
import { Grid, List, ListItem, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState, useEffect} from "react";
import { color_one } from "../utils/Themes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GetChatsUsers } from "../services/ChatService";

export default function ChatComponent(props) {
  const [chats, setChats] = useState([]);

  useEffect(() =>{
    async function fetchChat(){
      const data_chat = await GetChatsUsers("62749e79e0af101d85ac2f44", "62749ea0e0af101d85ac2f50");
      
      setChats(data_chat);
    }
      fetchChat();
  }, [chats])
  
  return (
    <List sx={{ overflowY: "scroll", height: "85%" }}>
      {/* <ul>
                  {props.chat.ChatMsgS.map((data, index) =>{
                    return(
                      <li>
                        {data.content}
                      </li>
                    )

                  })} 
                </ul>  */}

      {chats.ChatMsgS != undefined && (
        chats.ChatMsgS.map((data, index) =>{
          return(
            <Fragment>
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
     {/* {props.chat.ChatMsgS.map((data, index) => {
        return (
          <Fragment> */}
            {/* {data._usersend === props.user._id && (
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
              )} */}

              {/* {data._userreceive === props.user._id && (
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
        );
      })
    } */}
    </List>
  );
}
