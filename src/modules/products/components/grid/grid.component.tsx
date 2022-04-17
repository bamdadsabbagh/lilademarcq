import React, {ReactElement} from 'react';
import {Container, Content} from './grid.styles';

interface ContentListComponentProps {
  children: ReactElement[];
}

export function GridComponent({children}: ContentListComponentProps): ReactElement {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}
