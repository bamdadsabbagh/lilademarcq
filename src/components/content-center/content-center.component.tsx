import React, {ReactElement} from 'react';
import {Container} from './content-center.styles';

interface CenterComponentProps {
  children: ReactElement | ReactElement[];
  padding?: number;
}

const defaultProps = {
  padding: 7,
};

export function ContentCenterComponent({
  children,
  padding = defaultProps.padding,
}: CenterComponentProps): ReactElement {
  return (
    <Container padding={padding}>
      {children}
    </Container>
  );
}
