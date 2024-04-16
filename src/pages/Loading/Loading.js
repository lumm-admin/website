import React, { useEffect, useState } from 'react';

import { CircularProgress, Box, Typography } from '@mui/material';

// The loading page
function Loading({ notFullPage }) {
  const [seconds, setSeconds] = useState(3);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      if (seconds > 0) {
        setTimeout(() => {
          if (!isCancelled) setSeconds(seconds - 1);
        }, 1000);
      } else {
        setDisplayMessage(true);
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [setDisplayMessage, seconds]);

  return (
    <Box
      sx={{
        position: !notFullPage && 'absolute',
        zIndex: -20,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: !notFullPage && '100vh',
        width: '100%',
        p: 6,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <CircularProgress />
        <Typography
          variant='body3'
          color={displayMessage ? 'text.primary' : 'transparent'}
          sx={{ transitionDuration: '500ms', textAlign: 'center' }}
        >
          Le chargement peut prendre quelques secondes...
        </Typography>
      </Box>
    </Box>
  );
}

export default Loading;
