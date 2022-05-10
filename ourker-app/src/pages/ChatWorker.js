import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import Chat from "../models/Chat";
import ChatComponent from "../components/ChatComponent";
import { GetChatsUsers } from "../services/ChatService";

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
  const navigate = useNavigate();
  const textInput = React.useRef(null);

  const [value, setValue] = useState("");
  // const [chats, setChats] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const today = new Date();
    const hm_time = today.getHours() + ":" + today.getMinutes();

    const data = new FormData(event.target);

    if (data.get("message") == "") {
      alert("mensaje vacío");
    } else {
      const chat = {
        _usersend: props.user._id,
        _userreceive: "62749ea0e0af101d85ac2f50",
        content: data.get("message"),
        time: hm_time,
      };

      let newChat = new Chat(chat);

      const res = newChat.sendMessageDB();

      console.log(data.get("message"));
      res
        .then((value) => {
          if (!value.level) {
            alert("mensaje mandado");
            navigate("/Chat");
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

  // useEffect(() =>{
  //   async function fetchChat(){
  //     const data_chat = await GetChatsUsers("62749e79e0af101d85ac2f44", "62749ea0e0af101d85ac2f50");

  //     // console.log(data_chat); 
  //     setChats(data_chat);
  //   }
  //     fetchChat();
  // }, [])

  // console.log(chats.ChatMsgS);
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
            <TextField
              id="outlined-search"
              label="Buscar contacto"
              type="search"
              fullWidth
            />
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
            <List
              sx={{
                width: "100%",
                maxWidth: 560,
                backgroundColor: color_one.primary.secondary,
              }}
            >
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
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Fernando" />
              </ListItem>

              {/* Va a ir el map */}
              {/* {chats.ChatMsgS != undefined && (
                <ChatComponent user={props.user} chat={chats}/>
              )} */}
              <ChatComponent user={props.user}/>
             
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
              noValidate
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
                  fullWidth
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

              <Box sx={{ gridColumn: "20/20" }}>
                <Tooltip title="Crear Reporte">
                  <Button onClick={(e) => navigate("/CreateReport")}>
                    <PublishTwoToneIcon sx={{ marginTop: "30%" }} />
                  </Button>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          <Divider />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
