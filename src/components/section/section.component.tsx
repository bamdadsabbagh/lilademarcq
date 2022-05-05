import React, {ReactElement} from 'react';
import {Section, Wrapper} from './section.component.styles';

export interface ContentSectionComponentProps {
  children?: ReactElement | ReactElement[];
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
}: ContentSectionComponentProps): ReactElement {
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
