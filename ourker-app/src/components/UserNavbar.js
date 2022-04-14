import React from "react";
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
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { color_one } from "../utils/Themes";
import { useNavigate } from "react-router-dom";
import Settings from "@mui/icons-material/Settings";
import EditIcon from '@mui/icons-material/Edit';
import Logout from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
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
                <Avatar
                  sx={{ width: 45, height: 45 }}
                  src="data:image/jpeg;base64,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"
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
            

            <MenuItem>
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
