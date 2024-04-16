import React from 'react';

import NavbarLogic from './NavbarLogic';

import {
  AppBar,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { HashLink as RouterLink } from 'react-router-hash-link';

import LogoTurningVideo from '../../assets/videos/logo-turning.mp4';

function Navbar({}) {
  const { drawerOpened, toggleDrawer } = NavbarLogic();

  const drawer = (
    <SwipeableDrawer
      anchor={'left'}
      open={drawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          backgroundColor: 'background.default',
        }}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* <List>
          {navLinksObj.map((linkObj) => {
            return (
              <ListItem
                button
                key={linkObj.text}
                component={linkObj.href ? 'a' : RouterLink}
                to={linkObj.to ?? ''}
                href={linkObj.href ?? ''}
                sx={{
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  '&:hover': { textDecoration: 'none' },
                }}
              >
                <ListItemText primary={linkObj.text} />
              </ListItem>
            );
          })}
        </List> */}
      </Box>
    </SwipeableDrawer>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          position: 'relative',
          backgroundColor: 'primary',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0',
            height: '110px',
          }}
        >
          <Typography
            component={RouterLink}
            to='/#info'
            variant='h4'
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Infos pratiques
          </Typography>
          <Box
            sx={{
              width: '170px',
              height: '110px',
              backgroundColor: 'white',
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Box
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Box
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                component='video'
                autoPlay
                loop
                muted
              >
                <source src={LogoTurningVideo} />
              </Box>
            </Box>
          </Box>
          <Typography
            component={RouterLink}
            to='/#about'
            variant='h4'
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            La lümm c'est quoi enft
          </Typography>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              color: 'white',
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <i className='fas fa-bars'></i>
          </IconButton>
        </Container>
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;
