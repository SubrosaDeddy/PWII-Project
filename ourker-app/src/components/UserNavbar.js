import React, { Fragment} from "react";
import { Image } from "mui-image";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { color_one } from "../utils/Themes";
import { useNavigate } from "react-router-dom";
import Settings from "@mui/icons-material/Settings";
import EditIcon from '@mui/icons-material/Edit';
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import TextField from '@mui/material/TextField';

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () =>{
    props.setLoggedUser("");
    navigate("/");
  }
  const navigate = useNavigate();
  
  if(props.user)
  {
    return (
      <ThemeProvider theme={color_one}>
        <Box
          sx={{
            flexGrow: 1,
            boxShadow: 1,
            backgroundColor: color_one.primary.secondary,
          }}
        >
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              <Image
                src="/ourker_logo.png"
                sx={{ maxWidth: "300px", mr: "auto" }}
              />
            </Button>
  
            <Box sx={{ width: "100%" }}></Box>

            <Box
              sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Typography sx={{marginRight:"50px", color:"black"}}>{props.user.username}</Typography>
                  <Avatar
                    sx={{ width: 45, height: 45 }}
                    src={props.user.profilepicture}
                  ></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 25,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => navigate("/Perfil")}>
                <ListItemIcon >
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem >
              <MenuItem onClick={() => navigate("/Edit")}>
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                EditProfile
              </MenuItem>
              <MenuItem onClick={() => navigate("/Chat")}>
                <ListItemIcon>
                  <MailIcon fontSize="small" />
                </ListItemIcon>
                Message
              </MenuItem >
              
  
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>

            </Menu>
          </Toolbar>
        </Box>
      </ThemeProvider>
    );
  }
  else
  {
    return(<Fragment></Fragment>);
  }
  
}
