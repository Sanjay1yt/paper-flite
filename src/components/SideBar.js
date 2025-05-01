import React from "react";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ModeFanOffOutlinedIcon from "@mui/icons-material/ModeFanOffOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const topIcons = [
  { icon: <SearchOutlinedIcon />, route: "/search" },
  { icon: <PermMediaOutlinedIcon />, route: "/media" },
  { icon: <LayersOutlinedIcon />, route: "/layers" },
  { icon: <QuestionAnswerOutlinedIcon />, route: "/chats" },
  { icon: <SpeedOutlinedIcon />, route: "/performance" },
  { icon: <SendOutlinedIcon />, route: "/history" },
];
const bottomIcons = [
  { icon: <ModeFanOffOutlinedIcon />, route: "/settings" },
  { icon: <AppsOutlinedIcon />, route: "/apps" },
];

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-top">
        {topIcons.map(({ icon, route }, index) => (
          <NavLink
            key={index}
            to={route}
            className={({ isActive }) =>
              `side-bar-icon ${isActive ? "active-icon" : ""}`
            }
          >
            {React.cloneElement(icon, { fontSize: "medium" })}
          </NavLink>
        ))}
      </div>
      <div className="side-bar-bottom">
        {bottomIcons.map(({ icon ,route}, index) => (
          <NavLink
            key={index}
            to={route}
            className={({ isActive }) =>
              `side-bar-icon ${isActive ? "active-icon" : ""}`
            }
          >
            {React.cloneElement(icon, { fontSize: "medium" })}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
