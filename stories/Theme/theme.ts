import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom?: {
      light?: string;
      main?: string;
      dark?: string;
      contrastText?: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      light?: string;
      main?: string;
      dark?: string;
      contrastText?: string;
    };
  }
}

export const appTheme: Theme = createTheme({
  palette: {
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
});

export default appTheme;
