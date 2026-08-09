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
    fontFamily: '"Helvetica Neue", "Helvetica", "Inter", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(3rem, 6.5vw, 10rem)',
      fontWeight: 900,
      letterSpacing: '-0.03em',
      lineHeight: 0.9,
    },
    h2: {
      fontSize: 'clamp(2.5rem, 5vw, 8rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
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
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: '#00B8D4',
            color: '#fff',
          },
        },
        containedPrimary: {
          background: '#00E5FF',
          color: '#ffffff',
          '&:hover': {
            background: '#00B8D4',
          },
        },
        outlined: {
          border: '1px solid #1D1D1F',
          color: '#1D1D1F',
          '&:hover': {
            backgroundColor: '#1D1D1F',
            color: '#ffffff',
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
