import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function CatalogItem() {
    const { children, value, index, ...other } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
    <CardMedia
        component="img"
        height="194"
        image="public/cup.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Board
        </Typography>
      </CardContent>
    </Card>
  );
}
