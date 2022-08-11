import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./components.css";

function GraphCard({ title, imgSrc }) {
  return (

    <Card
      className={`infoBox`}
    >
      <CardContent style={{padding:'0px'}}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>

        <img src={imgSrc} alt={title} />
      </CardContent>
    </Card>


  );
}

export default GraphCard;