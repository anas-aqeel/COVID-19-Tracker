import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./components.css";
import numeral from "numeral";

function InfoCard({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } `}
    >
      <CardContent style={{ padding: "0px" }}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <p className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {`+${numeral(cases).format("0.0a")}`}
        </p>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
