import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MyContext } from "../Context/GlobalContext";
import { useContext } from "react";

export default function SelectLabels(props) {
  let {
    data: { countryData },
    fetchQueryData,
  } = useContext(MyContext);
  const [filter, setFilter] = React.useState("WorldWide");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">Search</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem onClick={() => fetchQueryData(`all`)} value="WorldWide">WorldWide</MenuItem>
        {props.children}

        {countryData?.map((e) => (
          <MenuItem onClick={() => fetchQueryData(`countries/${e.country}`)} key={e.country} value={e.country}>
            {e.country}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
