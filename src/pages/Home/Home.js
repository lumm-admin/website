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
import HourParagraph from '../../components/HourParagraph/HourParagraph';
import SquarredLine from '../../components/SquarredLine/SquarredLine';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';

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
          height: 'calc(90vh)',
          overflow: 'hidden',
          position: 'relative',
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
  const hourProgram = [
    {
      hour: '17',
      text: 'Ouverture des portes<br/>Stands artisans + expositions<br/>Bar Satellite<br/> Snacks Lümm',
    },
    { hour: '18', text: 'Défilé par le pôle mode d’Artepoly : SWAG' },
    {
      hour: '21',
      text: "Ouverture de l'espace tripostal<br/>Début des DJ sets<br/>Bars + Snacks Lümm",
    },
    { hour: '03', text: 'Fin de Lümm x SWAG' },
  ];
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        position: 'relative',
        //top: '-0.8em',
      }}
      id='info'
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
      <EmptySpace height={80} />
      <Container
        maxWidth='md'
        sx={{
          flexDirection: 'column',
          width: '100%',
          display: { xs: 'none', sm: 'flex' },
          position: 'relative',
        }}
      >
        {hourProgram.map((el, id) => {
          const rightAligned = id % 2 === 0;
          return (
            <Box
              sx={{
                width: '50%',
                alignSelf: rightAligned ? 'flex-start' : 'flex-end',
                position: 'relative',
              }}
            >
              <HourParagraph
                {...el}
                rightAligned={rightAligned}
                sx={{
                  position: 'relative',
                  /* top: '50%',
                  transform: 'translateY(-50%)', */

                  ...(rightAligned ? { right: '2em' } : { left: '2em' }),
                }}
              />
            </Box>
          );
        })}
        <SquarredLine
          sx={{
            height: 'calc(100% + 1em)',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Container>
      <Container
        maxWidth='md'
        sx={{
          flexDirection: 'row',
          width: '100%',
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <SquarredLine />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '2em',
            ml: '2em',
          }}
        >
          {hourProgram.map((el, id) => (
            <HourParagraph {...el} sx={{}} />
          ))}
        </Box>
      </Container>
      <EmptySpace height={80} />
    </Box>
  );
}

function PlaceSection() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'primary.main' }}>
      <Typography
        variant='h1'
        sx={{
          fontSize: '15vw',
          lineHeight: '0.8',
        }}
        color='white'
      >
        Accès
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2em',
        }}
      >
        <Typography textAlign='right' minWidth='150px' color='white'>
          <Link
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'underline',
            }}
            href='https://labor-lausanne.ch/'
          >
            La Rasude
          </Link>{' '}
          <br />
          Place de la Gare 1<br />
          1003 Lausanne
          <br />
          Suisse
          <br />
          <br />À 1 minute à pied en sortant de la gare
        </Typography>
        <Map />
      </Container>
      <EmptySpace height={80} />
    </Box>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProgramSection />
      <PlaceSection />
      <Footer />
    </>
  );
}
export default Home;
