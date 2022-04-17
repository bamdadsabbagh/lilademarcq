import React, {ReactElement} from 'react';
import {Container} from './content-center.styles';

interface CenterComponentProps {
  children: ReactElement | ReactElement[];
}

export function ContentCenterComponent({children}: CenterComponentProps): ReactElement {
  return (
    <Container>
      {children}
    </Container>
  );
}
