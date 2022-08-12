import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./components.css";

function InfoCard({ title, cases, active, isRed, ...props }) {
  return (

    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"} `}
    >
      <CardContent style={{padding:'0px'}}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <p className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </p>
      </CardContent>
    </Card>


  );
}

export default InfoCard;