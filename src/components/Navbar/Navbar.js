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

import LogoTurningVideo from '../../assets/images/giflumm.gif';

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
          position: 'absolute',
          backgroundColor: 'primary',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row-reverse', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '110px',
          }}
        >
          <Typography
            component={RouterLink}
            to='/#info'
            variant='body1'
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              textDecoration: 'none',
              textAlign: 'right',
            }}
          >
            Infos pratiques
          </Typography>
          <Box
            sx={{
              width: '170px',
              height: '110px',
              top: '0',
              left: '50%',
              position: { xs: 'static', sm: 'absolute' },

              transform: { xs: '', sm: 'translateX(-50%)' },
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
                  backgroundColor: 'transparent',
                }}
                component='img'
                src={LogoTurningVideo}
              />
            </Box>
          </Box>
          <Typography
            href='mailto:contact@lumm.love'
            component='a'
            variant='h4'
            sx={{
              color: 'white',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Contact
          </Typography>
          {/* <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              color: 'white',
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <i className='fas fa-bars'></i>
          </IconButton> */}
        </Container>
      </AppBar>
      {drawer}
    </>
  );
}

export default Navbar;
