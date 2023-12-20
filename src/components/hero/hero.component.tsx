import React from 'react';
import {Container} from './hero.component.styles';

interface HeroComponentProps {
  children: JSX.Element;
}

export function HeroComponent({children}: HeroComponentProps): JSX.Element {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
