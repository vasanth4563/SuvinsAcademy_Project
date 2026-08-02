import { createTheme } from '@mui/material/styles';

const NAVY = '#192b5c';
const NAVY_LIGHT = '#243d7a';
const NAVY_DARK = '#101d3e';
const RED = '#b51200';
const RED_DARK = '#b51200';
const RED_LIGHT = '#b51200';

const theme = createTheme({
  palette: {
    primary: {
      main: NAVY,
      light: NAVY_LIGHT,
      dark: NAVY_DARK,
      contrastText: '#ffffff',
    },
    secondary: {
      main: RED,
      light: RED_LIGHT,
      dark: RED_DARK,
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6fb',
      paper: '#ffffff',
    },
    text: {
      primary: NAVY,
      secondary: '#4a5a7a',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 800 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h6: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 999, padding: '10px 28px' },
        containedPrimary: {
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
          '&:hover': { background: `linear-gradient(135deg, ${NAVY_DARK} 0%, ${NAVY} 100%)` },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${RED} 0%, ${RED_LIGHT} 100%)`,
          boxShadow: '0 8px 24px rgba(192,57,43,0.35)',
          '&:hover': {
            background: `linear-gradient(135deg, ${RED_DARK} 0%, ${RED} 100%)`,
            boxShadow: '0 12px 32px rgba(192,57,43,0.45)',
          },
        },
      },
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 16, boxShadow: '0 4px 20px rgba(25,43,92,0.08)' } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 600, borderRadius: 999 } } },
    MuiTab: { styleOverrides: { root: { textTransform: 'none', fontWeight: 600, borderRadius: 999 } } },
    MuiAccordion: { styleOverrides: { root: { '&:before': { display: 'none' } } } },
  },
});

export default theme;
