import * as React from "react";
import CatalogItem from "./CatalogItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Catalog() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <CatalogItem />
        </Grid>
        <Grid item xs={8}>
          <CatalogItem />
        </Grid>
      </Grid>
    </Box>
  );
}
