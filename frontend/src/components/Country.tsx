import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CountrySelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (

    <div>
      <FormControl sx={{ minWidth: 120, width: 1}}>
        <Select
          sx={{
            height: "50px",
            border: "1px solid #FA551D",
            boxShadow: "3px 2px 2px rgba(250, 85, 29, 0.3)",
            background: "#FFF2EE",
            borderRadius: "10px",
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" sx={{ fontSize: '24px', color: '#FA551D' }}>
            None
          </MenuItem>
          <MenuItem value={10} sx={{ fontSize: '16px', color: '#FA551D' }}>UniteState</MenuItem>
          <MenuItem value={20} sx={{ fontSize: '16px', color: '#FA551D' }}>India</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
