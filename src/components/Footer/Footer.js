import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

import Palette from '../../theme/palette';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

import NoisyContainer from '../NoisyContainer/NoisyContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import EmptySpace from '../EmptySpace/EmptySpace';

function Footer() {
  const { STATE_GREY, NIGHT } = Palette();

  return (
    <NoisyContainer>
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <SectionTitle title='Get an alert when' highlight='we lauch' />
        <EmptySpace under='h2' />
        <Divider sx={{ width: '100%', mt: 5 }} />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mt: 3,
            mb: 10,
          }}
        >
          <Box
            color={STATE_GREY}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 5,
            }}
          >
            <Typography variant='subtitle2'>©IGLOW® 2023</Typography>
            <Typography variant='subtitle2'>Legal Notice</Typography>
            <Typography variant='subtitle2'>Privacy Policy</Typography>
          </Box>
          <Box
            color={STATE_GREY}
            sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}
          >
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaInstagram
                component='a'
                href='https://www.instagram.com/okalo.ch'
                color='white'
              />
            </Avatar>
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaTiktok
                component='a'
                href='https://www.tiktok.com/'
                color='white'
              />
            </Avatar>
            <Avatar sx={{ backgroundColor: NIGHT }}>
              <FaYoutube
                component='a'
                href='https://www.youtube.com/'
                color='white'
              />
            </Avatar>
          </Box>
        </Box>
      </Container>
    </NoisyContainer>
  );
}

export default Footer;
