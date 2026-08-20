import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    primary: {
      main: '#00E5FF',
      light: '#4d4dff',
      dark: '#00B8D4',
    },
    secondary: {
      main: '#1D1D1F',
      light: '#333333',
      dark: '#000000',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(3rem, 6.5vw, 9.5rem)',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 0.94,
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(2.25rem, 4.5vw, 6.5rem)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: 'clamp(1.75rem, 3vw, 3.5rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '1.1rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '12px 32px',
          boxShadow: 'none',
          fontWeight: 700,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          backgroundColor: '#1D1D1F',
          color: '#ffffff !important',
          '&:hover': {
            backgroundColor: '#00E5FF',
            color: '#1D1D1F !important',
          },
        },
        containedPrimary: {
          backgroundColor: '#1D1D1F',
          color: '#ffffff !important',
          '&:hover': {
            backgroundColor: '#00E5FF',
            color: '#1D1D1F !important',
          },
        },
        containedSecondary: {
          backgroundColor: '#1D1D1F',
          color: '#ffffff !important',
          '&:hover': {
            backgroundColor: '#00E5FF',
            color: '#1D1D1F !important',
          },
        },
        outlined: {
          border: '1.5px solid #1D1D1F',
          color: '#1D1D1F !important',
          '&:hover': {
            backgroundColor: '#1D1D1F',
            color: '#ffffff !important',
            borderColor: '#1D1D1F',
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          transition: 'none',
          '&:hover': {
            transform: 'none',
            borderColor: 'transparent',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
