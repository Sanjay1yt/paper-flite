import React, { useEffect, useState, useMemo } from "react";
import waterImage from "../../assets/water.jpg";
import jokerImage from "../../assets/joker.png";
import natureImage from "../../assets/nature.png";
import newImage from "../../assets/news.jpg";
import quotesImage from "../../assets/Quotes.png";
import artImage from "../../assets/art.jpg";
import { CollectionHeader } from "./CollectionHeader.tsx";
import { EditModeActions } from "./EditModeActions.tsx";
import { SearchSection } from "./SearchSection.tsx";
import { SortSection } from "./SortSection.tsx";
import debounce from "lodash.debounce";
import { CollectionCard } from "./CollectionCard.tsx";
import CircularProgress from "@mui/material/CircularProgress";

interface Collection {
  id: number;
  title: string;
  count: number;
  type: "Photos" | "Videos" | "Documents";
  image: string;
  createdAt: string;
}

type TabValue = "All Files" | "Photos" | "Videos" | "Documents";

export const Collections: React.FC = () => {
  const initialCollections: Collection[] = [
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
      count: 7,
      type: "Videos",
      image: natureImage,
      createdAt: "20/01/2024",
    },
    {
      id: 3,
      title: "Collection 3",
      count: 10,
      type: "Photos",
      image: quotesImage,
      createdAt: "05/02/2024",
    },
    {
      id: 4,
      title: "Collection 4",
      count: 100,
      type: "Videos",
      image: newImage,
      createdAt: "10/03/2024",
    },
    {
      id: 5,
      title: "Collection 5",
      count: 8,
      type: "Photos",
      image: artImage,
      createdAt: "20/03/2024",
    },
    {
      id: 6,
      title: "Collection 6",
      count: 6,
      type: "Videos",
      image: natureImage,
      createdAt: "30/04/2024",
    },
    {
      id: 7,
      title: "Collection 7",
      count: 9,
      type: "Videos",
      image: quotesImage,
      createdAt: "04/05/2024",
    },
    {
      id: 8,
      title: "Collection 8",
      count: 3,
      type: "Photos",
      image: waterImage,
      createdAt: "06/05/2024",
    },
    {
      id: 9,
      title: "Collection 9",
      count: 4,
      type: "Photos",
      image: jokerImage,
      createdAt: "11/06/2024",
    },
    {
      id: 10,
      title: "Collection 10",
      count: 2,
      type: "Videos",
      image: natureImage,
      createdAt: "24/06/2024",
    },
    {
      id: 11,
      title: "Collection 11",
      count: 11,
      type: "Documents",
      image: quotesImage,
      createdAt: "29/06/2024",
    },
    {
      id: 12,
      title: "Collection 12",
      count: 50,
      type: "Videos",
      image: newImage,
      createdAt: "13/07/2024",
    },
    {
      id: 13,
      title: "Collection 13",
      count: 34,
      type: "Photos",
      image: artImage,
      createdAt: "15/07/2024",
    },
    {
      id: 14,
      title: "Collection 14",
      count: 77,
      type: "Documents",
      image: natureImage,
      createdAt: "02/08/2024",
    },
    {
      id: 15,
      title: "Collection 15",
      count: 90,
      type: "Videos",
      image: quotesImage,
      createdAt: "17/02/2025",
    },
    {
      id: 16,
      title: "Collection 16",
      count: 100,
      type: "Photos",
      image: waterImage,
      createdAt: "09/03/2025",
    },
  ]
  const [totalCollections, setTotalCollections] = useState<Collection[]>(initialCollections);
  const [activeTab, setActiveTab] = useState<TabValue>("All Files");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [renamedIndex, setRenamedIndex] = useState<Collection[]>([]);
  const [isDescendingOrder, setIsDescendingOrder] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleTabChange = (tab: TabValue) => {
    setActiveTab(tab);
  };

  const getSearchedData = debounce((userInput: string) => {
    setIsLoading(true);
    setSearchValue(userInput.replace(/\s+/g, "").toLocaleLowerCase());
    setTimeout(() => setIsLoading(false), 1000);
  }, 500);

  const toggleDeleteMode = () => setIsDeleteMode(true);
  const toggleEditMode = () => setIsEditMode(true);
  const toggleSortOrder = () => setIsDescendingOrder(prev => !prev);

  const cancelToggleMode = () => {
    setIsDeleteMode(false);
    setIsEditMode(false);
    setSelectedIndexes([]);
    setRenamedIndex([]);
  };

  const handleSelect = (collectionId: number) => {
    setSelectedIndexes(prev =>
      prev.includes(collectionId)
        ? prev.filter(id => id !== collectionId)
        : [...prev, collectionId]
    );
  };

  const saveEditedData = () => {
    if (selectedIndexes.length) {
      setTotalCollections(prev => 
        prev.filter(({ id }) => !selectedIndexes.includes(id))
      );
    }
    if (renamedIndex.length) {
      setTotalCollections(renamedIndex);
    }
    cancelToggleMode();
  };

  const handleRename = (index: number, newTitle: string) => {
    setTotalCollections(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], title: newTitle };
      return updated;
    });
  };

  const filteredCollections = useMemo(() => {
    const parseDate = (dateStr: string): Date => {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month - 1, day);
    };

    return totalCollections
      .filter(({ type, title }) => {
        const normalizedTitle = title.replace(/\s+/g, "").toLowerCase();
        const normalizedSearch = searchValue.toLowerCase();
        const matchesTab = activeTab === "All Files" || activeTab === type;
        const matchesSearch = normalizedTitle.includes(normalizedSearch);
        return matchesTab && (searchValue === "" || matchesSearch);
      })
      .sort((a, b) => {
        const dateA = parseDate(a.createdAt).getTime();
        const dateB = parseDate(b.createdAt).getTime();
        return isDescendingOrder ? dateB - dateA : dateA - dateB;
      });
  }, [totalCollections, activeTab, searchValue, isDescendingOrder]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="collection-container">
      <div className="collection-header-section">
        <CollectionHeader
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        {isDeleteMode || isEditMode ? (
          <EditModeActions
            onSave={saveEditedData}
            onCancel={cancelToggleMode}
          />
        ) : (
          <div className="search-sort-section">
            <SearchSection
              onSearch={getSearchedData}
              onEditMode={toggleEditMode}
              onDeleteMode={toggleDeleteMode}
            />
            <SortSection
              isDescendingOrder={isDescendingOrder}
              onSortToggle={toggleSortOrder}
            />
          </div>
        )}
      </div>
      {isLoading ? (
        <CircularProgress sx={{ color: "#e51058", alignSelf: "center" }} />
      ) : (
        <div className="collections-grid">
          {filteredCollections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              {...collection}
              isDeleteMode={isDeleteMode}
              isEditMode={isEditMode}
              isSelected={selectedIndexes.includes(collection.id)}
              onSelect={() => handleSelect(collection.id)}
              onRename={(newTitle) => handleRename(index, newTitle)}
            />
          ))}
        </div>
      )}
    </div>
  );
};