import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroLayout from './HeroLayout';
import UploadButtons from "./UploadButton";
const backgroundImage =
  'https://source.unsplash.com/MOHTDu-68no/';

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Car Damage Detection
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Detect Scratch, Dent, Color Removal
      </Typography>
      <UploadButtons/>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        choose file 
      </Typography>
    </HeroLayout>
  );
}