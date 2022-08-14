import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SelectLabels from "../Mui/Select";
import { useContext } from "react";
import { MyContext } from "../../Context/GlobalContext";
import { MenuItem } from "@mui/material";

export default function ButtonAppBar() {
  let {
    data: { countryData },
    fetchQueryData,
  } = useContext(MyContext);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{backgroundColor: '#fd0000e0'}} position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              COVID-19 Tracker
            </Typography>
            <SelectLabels color='white' onClick={() => fetchQueryData(`all`)}>
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
