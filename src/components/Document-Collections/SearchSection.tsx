import React from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface SearchSectionProps {
  onSearch: (searchValue: string) => void;
  onEditMode: () => void;
  onDeleteMode: () => void;
  onCreateNew?: () => void; // Made optional as it's not used in all buttons
}

export const SearchSection = React.memo<SearchSectionProps>(
  ({ onSearch, onEditMode, onDeleteMode, onCreateNew }) => {
    return (
      <div className="search-section">
        <TextField
          placeholder="Type here to search..."
          variant="outlined"
          size="small"
          sx={{
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              border: "0px solid #DBDBDB",
              padding: "8px 12px",
              fontSize: "16px",
              fontWeight: 500,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#DBDBDB !important",
            },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            onSearch(e.target.value)
          }
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "grey", marginRight: "8px" }} />
            ),
          }}
        />
        <div className="create-new-collection">
          <Button variant="outlined" size="small" onClick={onEditMode}>
            <ModeEditOutlinedIcon fontSize="small" />
          </Button>
          <Button variant="outlined" size="small" onClick={onDeleteMode}>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </Button>
          <Button variant="outlined" size="small">
            <ContentCopyOutlinedIcon fontSize="small" />
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{
              color: "black",
              textTransform: "none",
              fontSize: "17px",
            }}
            onClick={onCreateNew}
          >
            <AddCircleOutlineOutlinedIcon
              sx={{
                color: "#E51058",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            Create new collection
          </Button>
        </div>
      </div>
    );
  }
);
SearchSection.displayName = "SearchSection";