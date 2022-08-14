import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const [filter, setFilter] = React.useState("WorldWide");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <FormControl style={{ color: props.color }} sx={{ m: 1, minWidth: 120 }}>
      <InputLabel
        style={{ color: props.color }}
        id="demo-simple-select-helper-label"
      >
        Filter
      </InputLabel>
      <Select
        style={{ color: props.color }}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={filter}
        label="Filter"
        onChange={handleChange}
        fullWidth={true}
      >
        <MenuItem onClick={props.onClick} value="WorldWide">
          WorldWide
        </MenuItem>
        {props.children}
      </Select>
    </FormControl>
  );
}
