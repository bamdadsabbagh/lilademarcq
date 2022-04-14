import React, {ReactElement} from 'react';
import {StyledContainer, StyledList} from './list.styles';

interface ContentListComponentProps {
  children: ReactElement[];
}

export function ListComponent({children}: ContentListComponentProps): ReactElement {
  return (
    <StyledList>
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledList>
  );
}
