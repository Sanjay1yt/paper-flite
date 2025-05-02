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
import { TextField, Chip, Checkbox, InputBase, Button } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import debounce from "lodash.debounce";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const CollectionCard = ({
  title,
  count,
  type,
  image,
  createdAt,
  isEditMode,
  isDeleteMode,
  isSelected,
  onSelect,
  onRename,
}) => {
  const [editTitle, setEditTitle] = useState(title);

  const handleRename = () => {
    if (editTitle.trim()) {
      onRename(editTitle.trim());
    }
  };

  return (
    <div className="collection-card">
      <div className="image-container">
        <img src={image} alt={title} />
        {isDeleteMode && (
          <input
            type="checkbox"
            className="checkbox-top-left"
            checked={isSelected}
            onChange={onSelect}
          />
        )}
      </div>
      <div className="collection-info">
        {isEditMode ? (
          <InputBase
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleRename();
              }
            }}
            fullWidth
            autoFocus
          />
        ) : (
          <h3>{title}</h3>
        )}
        {count && type && (
          <p>
            {count} {type} - Created on {createdAt}
          </p>
        )}
      </div>
    </div>
  );
};

export const Collections = () => {
  const [totalCollections, setTotalCollections] = useState([
    {
      id: 1,
      title: "Collection 1",
      count: 5,
      type: "Photos",
      image: jokerImage,
      createdAt: "01/01/2024",
    },
    {
      id: 2,
      title: "Collection 2",
      count: 5,
      type: "Videos",
      image: natureImage,
      createdAt: "20/01/2024",
    },
    {
      id: 3,
      title: "Collection 3",
      count: 5,
      type: "Photos",
      image: quotesImage,
      createdAt: "05/02/2024",
    },
    {
      id: 4,
      title: "Collection 4",
      count: 5,
      type: "Videos",
      image: newImage,
      createdAt: "10/03/2024",
    },
    {
      id: 5,
      title: "Collection 5",
      count: 5,
      type: "Photos",
      image: artImage,
      createdAt: "20/03/2024",
    },
    {
      id: 6,
      title: "Collection 6",
      count: 5,
      type: "Videos",
      image: natureImage,
      createdAt: "30/04/2024",
    },
    {
      id: 7,
      title: "Collection 7",
      count: 5,
      type: "Videos",
      image: quotesImage,
      createdAt: "04/05/2024",
    },
    {
      id: 8,
      title: "Collection 8",
      count: 5,
      type: "Photos",
      image: waterImage,
      createdAt: "06/05/2024",
    },
    {
      id: 9,
      title: "Collection 1",
      count: 5,
      type: "Photos",
      image: jokerImage,
      createdAt: "11/06/2024",
    },
    {
      id: 10,
      title: "Collection 2",
      count: 5,
      type: "Videos",
      image: natureImage,
      createdAt: "24/06/2024",
    },
    {
      id: 11,
      title: "Collection 3",
      count: 5,
      type: "Documents",
      image: quotesImage,
      createdAt: "29/06/2024",
    },
    {
      id: 12,
      title: "Collection 4",
      count: 5,
      type: "Videos",
      image: newImage,
      createdAt: "13/07/2024",
    },
    {
      id: 13,
      title: "Collection 5",
      count: 5,
      type: "Photos",
      image: artImage,
      createdAt: "15/07/2024",
    },
    {
      id: 14,
      title: "Collection 6",
      count: 5,
      type: "Documents",
      image: natureImage,
      createdAt: "02/08/2024",
    },
    {
      id: 15,
      title: "Collection 7",
      count: 5,
      type: "Videos",
      image: quotesImage,
      createdAt: "17/02/2025",
    },
    {
      id: 16,
      title: "Collection 8",
      count: 5,
      type: "Photos",
      image: waterImage,
      createdAt: "09/03/2025",
    },
  ]);
  const [activeTab, setActiveTab] = useState("All Files");
  const [searchValue, setSearchValue] = useState("");
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [renamedIndex, setRenamedIndex] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getSearchedData = (userInput) => {
    deBounceDispatch(userInput.replace(/\s+/g, "").toLocaleLowerCase());
  };
  const deBounceDispatch = debounce((input) => {
    setSearchValue(input);
  }, 500);

  const toggleDeleteMode = () => {
    setIsDeleteMode(true);
  };
  const toggleEditMode = () => {
    setIsEditMode(true);
  };
  const cancelToggleMode = () => {
    setIsDeleteMode(false);
    setIsEditMode(false);
    setSelectedIndexes([]);
    setRenamedIndex([]);
  };
  const handleSelect = (collectionIndex) => {
    setSelectedIndexes((prev) =>
      prev.includes(collectionIndex)
        ? prev.filter(
            (exitingCollectionIndex) =>
              exitingCollectionIndex !== collectionIndex
          )
        : [...prev, collectionIndex]
    );
  };

  const saveEditedData = () => {
    if (selectedIndexes.length) {
      const removedCollections = totalCollections.filter(
        (_, index) => !selectedIndexes.includes(index)
      );
      setTotalCollections(removedCollections);
    }
    if (renamedIndex.length) {
      setTotalCollections(renamedIndex);
    }
    cancelToggleMode();
  };

  const handleRename = (index, newTitle) => {
    const updated = [...totalCollections];
    updated[index].title = newTitle;
    console.log({ renamedIndex });
    setRenamedIndex(updated);
  };

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
        {isDeleteMode || isEditMode ? (
          <div className="edit-mode-section">
            <h5>
              All changes made to this section will reflect <br /> for all users
              in the content hub.
            </h5>
            <Button
              variant="outlined"
              size="small"
              style={{
                backgroundColor: "#E51058",
                color: "white",
              }}
              onClick={saveEditedData}
            >
              Save
            </Button>
            <Button variant="outlined" size="small" onClick={cancelToggleMode}>
              Cancel
            </Button>
          </div>
        ) : (
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
                  <ModeEditOutlinedIcon
                    fontSize="small"
                    onClick={toggleEditMode}
                  />
                </Button>
                <Button variant="outlined" size="small">
                  <DeleteOutlineOutlinedIcon
                    fontSize="small"
                    onClick={toggleDeleteMode}
                  />
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
        )}
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
            <CollectionCard
              key={ele.id}
              {...ele}
              isDeleteMode={isDeleteMode}
              isEditMode={isEditMode}
              isSelected={selectedIndexes.includes(index)}
              onSelect={() => handleSelect(index)}
              onRename={(newTitle) => handleRename(index, newTitle)}
            />
          ))}
      </div>
    </div>
  );
};
