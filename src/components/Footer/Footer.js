import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import Palette from '../../theme/palette';
import { FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  const { LUMM_RED } = Palette();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 20,
        gap: '0.5em',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        component='a'
        href='https://www.instagram.com/lumm_love'
      >
        <Typography
          variant='body1'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          @lumm_love
        </Typography>
        <Box
          sx={{
            position: 'relative',
            top: '0.2em',
            ml: 1,
          }}
        >
          <FaInstagram color={LUMM_RED} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        component='a'
        href='https://www.youtube.com/@LUMMMMM'
      >
        <Link
          variant='body1'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          @LUMMMMM
        </Link>
        <Box
          sx={{
            position: 'relative',
            top: '0.2em',
            ml: 1,
          }}
        >
          <FaYoutube color={LUMM_RED} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        component='a'
        href='maito:contact@lumm.love'
      >
        <Typography
          variant='body1'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          contact@lumm.love
        </Typography>
        <Box
          sx={{
            position: 'relative',
            top: '0.2em',
            ml: 1,
          }}
        >
          <FaEnvelope color={LUMM_RED} />
        </Box>
      </Box>
      <Typography
        variant='subtitle1'
        color='primary'
        textAlign='center'
        mt='2em'
      >
        Avenue du Tir-Fédéral 25, 1024 Ecublens
        <br />
        Lümm © 2024
      </Typography>
    </Container>
  );
}

export default Footer;
