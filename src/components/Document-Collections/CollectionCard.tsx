import React, { useState } from "react";
import { Input } from "@mui/material";

interface CollectionCardProps {
  title: string;
  count?: number;
  type?: string;
  image: string;
  createdAt?: string;
  isEditMode: boolean;
  isDeleteMode: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onRename: (newTitle: string) => void;
}

export const CollectionCard = React.memo<CollectionCardProps>(
  ({
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
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{ backgroundColor: "#f5f5f5" }}
          />
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
          <Input
            value={editTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setEditTitle(e.target.value)
            }
            onBlur={handleRename}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                handleRename();
              }
            }}
            disabled={!isEditMode}
            fullWidth
            sx={{ borderBottom: "1px solid #DBDBDB" }}
          />
          {count && type && (
            <p style={{ marginTop: "7px" }}>
              {count} {type} - Created on {createdAt}
            </p>
          )}
        </div>
      </div>
    );
  }
);
CollectionCard.displayName = "CollectionCard";