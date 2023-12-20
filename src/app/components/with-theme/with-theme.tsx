import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Global} from '../../styles/global';
import {theme} from '../../styles/theme';

interface WithThemProps {
  children: JSX.Element;
}

/**
 * Wrapper component for styled-components
 */
export function WithTheme({children}: WithThemProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        {children}
      </ThemeProvider>
    </>
  );
}
