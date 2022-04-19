import React, {ReactElement, useState} from 'react';
import {TriangleComponent} from '../triangle/triangle.component';
import {StyledContainer, StyledTitle} from './form.styles';

interface FormComponentProps {
  text?: string;
}

const defaultProps = {
  text: 'Une question ? Ecrivez-moi',
};

export function FormComponent({
  text = defaultProps.text,
}: FormComponentProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledTitle>
        {text} <TriangleComponent
          isBottom={!isOpen}
          isTop={isOpen}
          onClick={() => setIsOpen((i) => !i)}
        />
      </StyledTitle>
    </StyledContainer>
  );
}
