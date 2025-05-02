import React from "react";
import { Button } from "@mui/material";

interface EditModeActionsProps {
  onSave: () => void;
  onCancel: () => void;
}

export const EditModeActions = React.memo<EditModeActionsProps>(
  ({ onSave, onCancel }) => {
    return (
      <div className="edit-mode-section">
        <h5>
          All changes made to this section will reflect <br /> for all users in
          the content hub.
        </h5>
        <div>
          <Button
            variant="outlined"
            size="small"
            style={{ backgroundColor: "#E51058", color: "white" }}
            onClick={onSave}
          >
            Save
          </Button>
        </div>
        <div>
          <Button variant="outlined" size="small" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
);
EditModeActions.displayName = "EditModeActions";