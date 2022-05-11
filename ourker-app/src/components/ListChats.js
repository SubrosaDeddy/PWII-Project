import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetListChat } from "../services/ChatService";
import { color_one } from "../utils/Themes";

export default function ListChats(props) {
  const [list, setList] = useState([]);
  const [datos, setDatos] = useState();

  useEffect(() => {
    async function fetchChatList() {
      const data_list = await GetListChat(props.user._id);
      setList(data_list);
    }
    fetchChatList();
  }, [list]);

  function datos_user(ids) {
    setDatos(ids);
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 560,
        backgroundColor: color_one.primary.secondary,
      }}
    >
      {list.unique != undefined &&
        list.unique.map((data, index) => {
          return (
            <ListItem
              button
              onClick={() => datos_user(data)}
              alignItems="flex-start"
              sx={{ m: 1 }}
            >
              <ListItemAvatar>
                <Avatar src={data.profilepicture} />
              </ListItemAvatar>
              <ListItemText primary={data.fullname} />
              <Divider variant="inset" component="li" />
            </ListItem>
          );
        })}
        {props.setChatInfo(datos)}
      {/* <ListItem
                button
                onClick={() => alert("asdasdas")}
                alignItems="flex-start"
                sx={{ m: 1 }}
            >
                <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText primary="Fernando" />
            </ListItem>
            <Divider variant="inset" component="li" /> */}
    </List>
  );
}
