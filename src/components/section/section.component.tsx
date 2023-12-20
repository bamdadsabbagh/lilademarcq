import React from 'react';
import {Section, Wrapper} from './section.component.styles';

export interface ContentSectionComponentProps {
  children: JSX.Element | JSX.Element[];
  backgroundColor?: string;
  isSmallTop?: boolean;
  isHero?: boolean;
  minHeight?: string;
  fullWidthMobile?: boolean;
}

export function SectionComponent({
  children,
  backgroundColor,
  isSmallTop,
  isHero,
  minHeight,
  fullWidthMobile,
}: ContentSectionComponentProps): JSX.Element {
  return (
    <Section
      backgroundColor={backgroundColor}
      isHero={isHero}
      minHeight={minHeight}
    >
      <Wrapper
        isSmallTop={isSmallTop}
        isHero={isHero}
        fullWidthMobile={fullWidthMobile}
      >
        {children}
      </Wrapper>
    </Section>
  );
}
