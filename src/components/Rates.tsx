import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  setSelectValue: (data: number) => void; 
}

const SelectLabels: React.FC <Props> = ({setSelectValue}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          sx={{
            height: "50px",
            border: "1px solid #FA551D",
            boxShadow: "3px 2px 2px rgba(250, 85, 29, 0.3)",
            background: "#FFF2EE",
            borderRadius: "10px",
            width: "400px", // Note: You might need to adjust or remove this to fit the component within its container
          }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" sx={{  color: "#FA551D" , width: "100%"}} onClick={() => setSelectValue(0)}>
            Default
          </MenuItem>
          <MenuItem value={3} sx={{  color: "#FA551D", width: "100%" }} onClick={() => setSelectValue(3)}>
            3Hr-$9 - Fixed Duration: 3.0 hours at $9.00
          </MenuItem>
          <MenuItem value={5} sx={{  color: "#FA551D", width: "100%" }} onClick={() => setSelectValue(5)}>
            5Hr-$15 - Fixed Duration: 5.0 hours at $15.00
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLabels;