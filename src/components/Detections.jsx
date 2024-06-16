import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    id : "1",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039478/MicrosoftTeams-image_5_iirezf.png',
    title: 'Scratch',
   
    width: '40%',
  },
  {
    id : "2",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039481/MicrosoftTeams-image_9_nkej3m.png',
    title: 'Scratch',
    width: '20%',
  },
  {
    id : "3",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039486/MicrosoftTeams-image_12_eepf5x.png',
    title: 'Dent',
    width: '40%',
  },
  {
    id : "4",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039482/MicrosoftTeams-image_10_abbl3n.png',
    title: 'Dent',
    width: '38%',
  },
  {
    id : "5",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039477/MicrosoftTeams-image_3_ztdrqa.png',
    title: 'Paint Removal',
    width: '38%',
  },
  {
    id : "6",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039481/MicrosoftTeams-image_11_qeu83i.png',
    title: 'Dent',
    width: '24%',
  },
  {
    id : "7",
    url: ' https://res.cloudinary.com/dxpol7udm/image/upload/v1660039936/MicrosoftTeams-image_n7insi.png',
    title: 'Dent',
    width: '40%',
  },
  {
    id : "8",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039479/MicrosoftTeams-image_1_ofus3e.png',
    title: 'Scratch',
    width: '20%',
  },
  {
    id : "9",
    url: 'https://res.cloudinary.com/dxpol7udm/image/upload/v1660039478/MicrosoftTeams-image_2_utvrlc.png',
    title: 'Scratch',
    width: '40%',
  },
];

export default function Detections() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
      Detections
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.id}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}