import React from "react";
import { Chip } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

type TabValue = "All Files" | "Photos" | "Videos" | "Documents";

interface CollectionHeaderProps {
  activeTab: TabValue;
  handleTabChange: (tab: TabValue) => void;
}

export const CollectionHeader = React.memo<CollectionHeaderProps>(
  ({ activeTab, handleTabChange }) => {
    const tabs: TabValue[] = ["All Files", "Photos", "Videos", "Documents"];

    return (
      <div className="title-filter-section">
        <div>
          <h1>collections</h1>
          <h5>personalized content storyboards</h5>
        </div>
        <div className="filter-chip">
          <div className="chip-filter">
            <AddCircleOutlineOutlinedIcon
              sx={{ color: "#717274", fontSize: "20px" }}
            />
          </div>
          {tabs.map((tab) => (
            <Chip
              key={tab}
              label={tab}
              variant="outlined"
              style={{
                backgroundColor: activeTab === tab ? "#E51058" : "transparent",
                color: activeTab === tab ? "white" : "black",
                padding: "22px 5px",
                borderRadius: "30px",
              }}
              onClick={() => handleTabChange(tab)}
            />
          ))}
        </div>
      </div>
    );
  }
);

CollectionHeader.displayName = "CollectionHeader";