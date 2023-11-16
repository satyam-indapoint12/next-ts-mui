"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProgressiveImage from '../progressive-image';

const CardView = ({
  title,
  image,
  description,
  children
}) => {
  
  return (
    <Grid item key={title} xs={12} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <ProgressiveImage 
        alt={title} 
        width={200}
        height={300}
        placeholder={title} 
        src={image} 
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  </Grid>
  );
};

export default CardView;
