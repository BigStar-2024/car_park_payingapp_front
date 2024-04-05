import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: "#FA551D", // Color for the unchecked state
          "&.Mui-checked": {
            color: "#FA551D", // Color for the checked state
          },
        }}
      />
    </div>
  );
}
