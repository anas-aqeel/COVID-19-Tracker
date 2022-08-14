import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SelectLabels from "../Mui/Select";
import { useContext } from "react";
import { MyContext } from "../../Context/GlobalContext";
import { MenuItem } from "@mui/material";
import logo from "../../assets/images/covid-19-isotype.svg"
import './navbar.css'
export default function ButtonAppBar() {
  let {
    data: { countryData },
    fetchQueryData,
  } = useContext(MyContext);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{backgroundColor: 'black'}} position="sticky">
          <Toolbar>
            <img src={logo} className="logo" alt="Logo" height={35} />
            <Typography variant="h6" color={'white'} component="div" sx={{ flexGrow: 1 }}>
              COVID-19 Tracker
            </Typography>
            <SelectLabels color={'white'} onClick={() => fetchQueryData(`all`)}>
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
