import { Box, Paper, Typography } from '@mui/material';

import { PiCaretUpBold, PiCaretDownBold } from 'react-icons/pi';
import Palette from '../../theme/palette';

function BottomSheet({
  open,
  minHeight,
  maxHeight,
  titleSection,
  setOpen,
  componentAbove,
  hidden,
  children,
  fixed,
  sx,
  ...props
}) {
  const { STATE_GREY } = Palette();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        maxHeight: hidden ? 0 : open ? '80vh' : '30vh',
        transition: 'max-height 0.3s ease',
        zIndex: 401,
      }}
    >
      {componentAbove && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            transform: 'translateY(-100%)',
            width: '100%',
            px: 2,
            pb: 1,
          }}
        >
          {componentAbove}
        </Box>
      )}
      <Paper
        sx={{
          borderRadius: '40px 40px 0 0',
          overflow: 'hidden',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            px: 3.5,
            pb: 2,
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              pt: 1,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={() => {
              setOpen && setOpen(!open);
            }}
          >
            {setOpen && (
              <Box
                component={open ? PiCaretDownBold : PiCaretUpBold}
                sx={{ fontSize: 20 }}
                color={STATE_GREY}
              />
            )}
          </Box>
          {titleSection}
        </Box>
        <Box
          width='100%'
          onTouchStart={() => {
            setOpen && setOpen(true);
          }}
          onTouchMove={() => {
            setOpen && setOpen(true);
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
}

export default BottomSheet;
