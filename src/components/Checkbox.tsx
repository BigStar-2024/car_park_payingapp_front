import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ColorCheckboxesProps {
  onCheckboxChange: (isChecked: boolean) => void;
}

const ColorCheckboxes: React.FC<ColorCheckboxesProps> = ({ onCheckboxChange }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheckboxChange(isChecked);
  };

  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: "#FA551D", // Color for the unchecked state
          "&.Mui-checked": {
            color: "#FA551D", // Color for the checked state
          },
        }}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default ColorCheckboxes
