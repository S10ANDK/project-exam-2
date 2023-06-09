import React from 'react';
import { ThemeProvider } from 'styled-components';

/*
  Theme for the project
*/

const theme = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accentOne: 'var(--color-accent-one)',
    accentTwo: 'var(--color-accent-two)',
    accentThree: 'var(--color-accent-three)',
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    borders: 'var(--color-borders)',
    error: 'var(--color-error)',
  },
  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.06)',
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
