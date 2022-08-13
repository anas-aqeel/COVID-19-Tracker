import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SelectLabels from "./Select";
import { useContext } from "react";
import { MyContext } from "../Context/GlobalContext";
import { MenuItem } from "@mui/material";

export default function ButtonAppBar() {
  let {
    data: { countryData },
    fetchQueryData,
  } = useContext(MyContext);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              COVID-19 Tracker
            </Typography>
            <SelectLabels onClick={() => fetchQueryData(`all`)}>
              {countryData?.map((e) => (
                <MenuItem
                  onClick={() => fetchQueryData(`countries/${e.country}`)}
                  key={e.country}
                  value={e.country}
                >
                  {e.country}
                </MenuItem>
              ))}
            </SelectLabels>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
