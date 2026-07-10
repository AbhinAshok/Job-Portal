import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  IconButton,
  Box,
} from "@mui/material";

import {
  Dashboard,
  Person,
  Work,
  Bookmark,
  Assignment,
  Notifications,
  Event,
  Recommend,
  Logout,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../app/slices/authSlice";

const expandedWidth = 260;
const collapsedWidth = 80;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Dashboard />,
      path: "/",
    },
    {
      title: "Profile",
      icon: <Person />,
      path: "/profile",
    },
    {
      title: "Jobs",
      icon: <Work />,
      path: "/jobs",
    },
    {
      title: "Saved Jobs",
      icon: <Bookmark />,
      path: "/saved-jobs",
    },
    {
      title: "Applications",
      icon: <Assignment />,
      path: "/applications",
    },
    {
      title: "Interviews",
      icon: <Event />,
      path: "/interviews",
    },
    {
      title: "Notifications",
      icon: <Notifications />,
      path: "/notifications",
    },
    {
      title: "Recommended Jobs",
      icon: <Recommend />,
      path: "/recommended-jobs",
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open
          ? expandedWidth
          : collapsedWidth,

        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: open
            ? expandedWidth
            : collapsedWidth,

          boxSizing: "border-box",

          transition:
            "width 0.3s ease",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open
            ? "space-between"
            : "center",
        }}
      >
        {open && (
          <h3
            style={{
              margin: 0,
            }}
          >
            Job Portal
          </h3>
        )}

        <IconButton
          onClick={() =>
            setOpen(!open)
          }
        >
          {open ? (
            <ChevronLeft />
          ) : (
            <ChevronRight />
          )}
        </IconButton>
      </Toolbar>

      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.title}
            selected={
              location.pathname ===
              item.path
            }
            onClick={() =>
              navigate(item.path)
            }
            sx={{
              minHeight: 55,
              justifyContent: open
                ? "initial"
                : "center",

              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open
                  ? 3
                  : "auto",
                justifyContent:
                  "center",
              }}
            >
              {item.icon}
            </ListItemIcon>

            {open && (
              <ListItemText
                primary={
                  item.title
                }
              />
            )}
          </ListItemButton>
        ))}
      </List>

      <Box
        sx={{
          marginTop: "auto",
        }}
      >
        <Divider />

        <ListItemButton
          onClick={handleLogout}
          sx={{
            minHeight: 55,
            justifyContent: open
              ? "initial"
              : "center",

            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open
                ? 3
                : "auto",
              justifyContent:
                "center",
            }}
          >
            <Logout />
          </ListItemIcon>

          {open && (
            <ListItemText primary="Logout" />
          )}
        </ListItemButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;