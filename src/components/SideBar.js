import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ModeFanOffOutlinedIcon from "@mui/icons-material/ModeFanOffOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const topIcons = [
  { icon: <SearchOutlinedIcon /> },
  { icon: <PermMediaOutlinedIcon /> },
  { icon: <LayersOutlinedIcon /> },
  { icon: <QuestionAnswerOutlinedIcon /> },
  { icon: <SpeedOutlinedIcon /> },
  { icon: <SendOutlinedIcon /> },
];
const bottomIcons = [
  { icon: <ModeFanOffOutlinedIcon /> },
  { icon: <AppsOutlinedIcon /> },
];

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-top">
        {topIcons.map(({ icon }, index) =>
          React.cloneElement(icon, {
            key: index,
            fontSize: "medium",
            className: "side-bar-icon ",
          })
        )}
      </div>
      <div className="side-bar-bottom">
        {bottomIcons.map(({ icon }, index) =>
          React.cloneElement(icon, {
            key: index,
            fontSize: "medium",
            className: "side-bar-icon",
          })
        )}
      </div>
    </div>
  );
};
