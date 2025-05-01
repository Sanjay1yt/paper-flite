import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SortIcon from "@mui/icons-material/Sort";
import waterImage from "../assets/water.jpg";
import jokerImage from "../assets/joker.png";
import natureImage from "../assets/nature.png";
import newImage from "../assets/news.jpg";
import quotesImage from "../assets/Quotes.png";
import artImage from "../assets/art.jpg";
import { TextField, Chip, MenuItem, Select, Button } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import debounce from "lodash.debounce";

const CollectionCard = ({ title, count, type, image }) => {
  return (
    <div className="collection-card">
      <img src={image} alt={title} />
      <div className="collection-info">
        <h3>{title}</h3>
        {count && type && (
          <p>
            {count} {type}
          </p>
        )}
      </div>
    </div>
  );
};

export const Collections = () => {
  const [activeTab, setActiveTab] = useState("All Files");
  const [searchValue, setSearchValue] = useState("");
  const [totalCollections, setTotalCollections] = useState([
    { title: "Collection 1", count: 5, type: "Photos", image: jokerImage },
    { title: "Collection 2", count: 5, type: "Videos", image: natureImage },
    { title: "Collection 3", count: 5, type: "Photos", image: quotesImage },
    { title: "Collection 4", count: 5, type: "Videos", image: newImage },
    { title: "Collection 5", count: 5, type: "Photos", image: artImage },
    { title: "Collection 6", count: 5, type: "Videos", image: natureImage },
    { title: "Collection 7", count: 5, type: "Videos", image: quotesImage },
    { title: "Collection 8", count: 5, type: "Photos", image: waterImage },
    { title: "Collection 1", count: 5, type: "Photos", image: jokerImage },
    { title: "Collection 2", count: 5, type: "Videos", image: natureImage },
    { title: "Collection 3", count: 5, type: "Documents", image: quotesImage },
    { title: "Collection 4", count: 5, type: "Videos", image: newImage },
    { title: "Collection 5", count: 5, type: "Photos", image: artImage },
    { title: "Collection 6", count: 5, type: "Documents", image: natureImage },
    { title: "Collection 7", count: 5, type: "Videos", image: quotesImage },
    { title: "Collection 8", count: 5, type: "Photos", image: waterImage },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getSearchedData = (userInput) => {
    deBounceDispatch(userInput.replace(/\s+/g, "").toLocaleLowerCase());
  };
  const deBounceDispatch = debounce((input) => {
    setSearchValue(input);
  }, 500);
  console.log({ searchValue });
  return (
    <div className="collection-container">
      <div className="collection-header-section">
        <div className="title-filter-section">
          <div>
            <h1>Collections</h1>
            <h5>personalized content storyboards</h5>
          </div>
          <div className="filter-chip">
            {["All Files", "Photos", "Videos", "Documents"].map((tab) => (
              <Chip
                key={tab}
                label={tab}
                variant="outlined"
                style={{
                  backgroundColor:
                    activeTab === tab ? "#E51058" : "transparent",
                  color: activeTab === tab ? "white" : "black",
                }}
                onClick={() => handleTabChange(tab)}
              />
            ))}
          </div>
        </div>
        <div className="search-sort-section">
          <div className="search-section">
            <TextField
              label="Type here to search..."
              variant="outlined"
              size="small"
              sx={{
                width: "400px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  border: "0px solid #DBDBDB",
                  padding: "8px 12px",
                  fontSize: "8px",
                  fontWeight: 500,
                },
              }}
              onChange={(e) => getSearchedData(e.target.value)}
            />
            <div className="create-new-collection">
              <Button variant="outlined" size="small">
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </Button>
              <Button variant="outlined" size="small">
                <ContentCopyOutlinedIcon fontSize="small" />
              </Button>
              <Button variant="outlined" size="small">
                Create new collection
              </Button>
            </div>
          </div>
          <div className="sort-section">
            <span>Created Date</span>
            <Button variant="outlined" size="small">
              <SortIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>

      <div className="collections-grid">
        {totalCollections
          .filter(({ type, title }) => {
            const normalizedTitle = title.replace(/\s+/g, "").toLowerCase();
            const normalizedSearch = searchValue?.trim().toLowerCase();

            const matchesTab = activeTab === "All Files" || activeTab === type;

            const matchesSearch =
              !normalizedSearch || normalizedTitle.includes(normalizedSearch);

            return matchesTab && matchesSearch;
          })
          .map((ele, index) => (
            <CollectionCard key={index} {...ele} />
          ))}
      </div>
    </div>
  );
};
