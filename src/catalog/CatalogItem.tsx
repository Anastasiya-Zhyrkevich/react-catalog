import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CatalogItem() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        image="cup.webp"
        alt="Paella dish"
        style={{
          objectFit: "contain",
          width: "300px",
          height: "300px",
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Board
        </Typography>
      </CardContent>
    </Card>
  );
}
