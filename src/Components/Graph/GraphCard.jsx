import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./graph.css";

function GraphCard({ title, imgSrc, onClick }) {
  return (

    <Card
      onClick={onClick}
      className={`infoBox`}
    >
      <CardContent style={{padding:'0px'}}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>

        <img width={150} src={imgSrc} alt={title} />
      </CardContent>
    </Card>


  );
}

export default GraphCard;