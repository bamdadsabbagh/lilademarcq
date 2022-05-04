import React, {ReactElement} from 'react';
import {Container} from './hero.component.styles';

interface HeroComponentProps {
  children: ReactElement;
}

export function HeroComponent({
  children,
}: HeroComponentProps): ReactElement {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  );
}
