import React, {ReactElement, useState} from 'react';
import {TriangleComponent} from '../triangle/triangle.component';
import {StyledContainer, StyledTitle} from './form.styles';

export function FormComponent(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledTitle>
        Une question ?
        Ecrivez-moi <TriangleComponent
        isBottom={!isOpen}
        isTop={isOpen}
        onClick={() => setIsOpen((i) => !i)}
      />
      </StyledTitle>
    </StyledContainer>
  );
}
