import React, {ReactElement} from 'react';
import {StyledContainer} from './center.styles';

interface CenterComponentProps {
  children: ReactElement | ReactElement[];
}

export function CenterComponent({children}: CenterComponentProps): ReactElement {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}
