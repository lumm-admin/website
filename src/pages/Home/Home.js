import React from 'react';

import { HashLink, HashLink as RouterLink } from 'react-router-hash-link';
import {
  Typography,
  Box,
  TextField,
  Container,
  Button,
  Link,
  Avatar,
  ListItemAvatar,
  List,
  ListItemText,
  ListItemButton,
  Skeleton,
  IconButton,
} from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import LogoTurningVideo from '../../assets/videos/logo-turning.mp4';
import BackgroundDancingVideo from '../../assets/videos/background-dancing.mp4';

function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        zIndex: 10,
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        style={{
          width: '100%',
          height: 'calc(92vh - 110px)',
          overflow: 'hidden',
          position: 'relative',
          top: -1,
        }}
      >
        <Box
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
          }}
          component='video'
          autoPlay
          loop
          muted
        >
          <source src={BackgroundDancingVideo} />
        </Box>
      </Box>
    </Box>
  );
}

function ProgramSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        position: 'relative',
        //top: '-0.8em',
        letterSpacing: '-0.35em',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontSize: '15vw',
          lineHeight: '0.8',
        }}
        color='primary'
      >
        Programme
        <br />
        Lümm x Swag
      </Typography>
      <Box></Box>
    </Box>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgramSection />
    </>
  );
}
export default Home;
