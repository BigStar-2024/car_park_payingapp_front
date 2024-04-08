import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ColorCheckboxesProps {
  onCheckboxChange: (isChecked: boolean) => void;
}

const ColorCheckboxes: React.FC<ColorCheckboxesProps> = ({ onCheckboxChange }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    // localStorage.setItem('isChecked', JSON.stringify(isChecked)); // Store checkbox state in localStorage
    onCheckboxChange(isChecked); // Send checkbox state using onCheckboxChange
  };

  // React.useEffect(() => {
  //   const savedIsChecked = localStorage.getItem('isChecked');
  //   if (savedIsChecked) {
  //     const isChecked = JSON.parse(savedIsChecked);
  //     onCheckboxChange(isChecked); // Send stored checkbox state using onCheckboxChange
  //   }
  // }, []);

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

export default ColorCheckboxes;
