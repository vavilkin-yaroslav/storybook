import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import appTheme from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
