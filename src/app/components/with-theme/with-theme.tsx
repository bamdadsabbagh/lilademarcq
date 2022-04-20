import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {Global} from '../../styles/global';
import {theme} from '../../styles/theme';

interface WithThemProps {
  children: ReactElement;
}

/**
 * Wrapper component for styled-components
 */
export function WithTheme({children}: WithThemProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        {children}
      </ThemeProvider>
    </>
  );
}
