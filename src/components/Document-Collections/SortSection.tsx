import React from "react";
import { Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

interface SortSectionProps {
  isDescendingOrder: boolean;
  onSortToggle: () => void;
}

export const SortSection = React.memo<SortSectionProps>(
  ({ isDescendingOrder, onSortToggle }) => {
    return (
      <div className="sort-section">
        <div className="sort-section-details">
          <div className="section-sortby">Sort by</div>
          <div className="sort-section-icons">
            <div style={{ fontSize: "17px" }}>Created date</div>
            <div className="sort-icons">
              <ExpandLessOutlinedIcon
                sx={{
                  fontSize: "12px",
                  color: !isDescendingOrder ? "#E51058" : "",
                }}
              />
              <ExpandMoreOutlinedIcon
                sx={{
                  fontSize: "12px",
                  color: isDescendingOrder ? "#E51058" : "",
                }}
              />
            </div>
          </div>
        </div>
        <Button 
          variant="outlined" 
          size="small" 
          onClick={onSortToggle}
          aria-label={isDescendingOrder ? "Sort ascending" : "Sort descending"}
        >
          <SortIcon fontSize="small" />
        </Button>
      </div>
    );
  }
);
SortSection.displayName = "SortSection";