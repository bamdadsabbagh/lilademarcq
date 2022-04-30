import React, {ReactElement} from 'react';
import {Section, Wrapper} from './section.styles';

export interface ContentSectionComponentProps {
  children: ReactElement | ReactElement[];
  backgroundColor?: string;
  isSmallTop?: boolean;
  isHero?: boolean;
  minHeight?: string;
}

export function SectionComponent({
  children,
  backgroundColor,
  isSmallTop,
  isHero,
  minHeight,
}: ContentSectionComponentProps): ReactElement {
  return (
    <Section
      backgroundColor={backgroundColor}
      isHero={isHero}
      minHeight={minHeight}
    >
      <Wrapper isSmallTop={isSmallTop} isHero={isHero}>
        {children}
      </Wrapper>
    </Section>
  );
}
