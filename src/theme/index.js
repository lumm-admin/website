import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Palette from './palette';

const palette = Palette();

// Manage the website theme
let theme = createTheme({
  palette: {
    primary: {
      main: palette.LUMM_RED,
    },
    background: {
      //default: palette.BLACK,
    },
    error: {
      main: palette.LUMM_RED,
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontFamily: '"OldLondon", "Helvetica", "Arial", sans-serif',
      fontSize: '15vw',
      letterSpacing: '-0.05em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"OldLondon", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: 48,
      //letterSpacing: '-4%',
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: '"OldLondon", "Helvetica", "Arial", sans-serif',
      //fontWeight: 700,
      fontSize: 32,
      lineHeight: 1.125,
    },
    h4: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      //fontWeight: 700,
      fontSize: 24,
      lineHeight: 4 / 3,
    },
    // p 24px || p large
    body1: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontSize: 24,
      lineHeight: 4 / 3,
    },
    // p 20px  || p medium
    body2: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontSize: 20,
      lineHeight: 1.2,
    },
    body3: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontSize: 16,
      lineHeight: 1.25,
    },
    // label 20px
    subtitle1: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.2,
      letterSpacing: '20%',
    },
    // label 16px
    subtitle2: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.25,
      letterSpacing: '16%',
    },
    // label 14px
    caption: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: '8%',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: '8%',
    },
    countdown: {
      fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: 'min(80px, 10vw)',
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        //disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        //disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 26,
          padding: '16px 26px',
          height: '44px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 26,
          backgroundColor: 'white',
          outline: 'none',
          height: '44px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          color: 'black',
          height: '46px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 14,
  },
});

/* theme.typography.h1[theme.breakpoints.down('sm')] = {
  fontSize: 32,
};

theme.typography.h2[theme.breakpoints.down('sm')] = {
  fontSize: 24,
};

theme.typography.h3[theme.breakpoints.down('sm')] = {
  fontSize: 20,
}; */

theme = responsiveFontSizes(theme);

export default theme;
