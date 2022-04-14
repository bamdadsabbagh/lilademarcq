import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {StyledContainer, StyledSection} from './section.styles';
import {appLoadedAtom} from '../../atoms/app-loaded';

export interface ContentSectionComponentProps {
  children: ReactElement | ReactElement[];
  width?: number;
  verticalPadding?: number;
  backgroundColor?: string;
}

export function SectionComponent({
  children,
  width,
  verticalPadding,
  backgroundColor,
}: ContentSectionComponentProps): ReactElement {
  const [appLoaded] = useAtom(appLoadedAtom);
  
  return (
    <StyledSection
      backgroundColor={backgroundColor ? backgroundColor : undefined}
      appLoaded={appLoaded ? 1 : 0}
    >
      <StyledContainer
        width={width ? width : undefined}
        verticalPadding={verticalPadding ? verticalPadding : undefined}
      >
        {children}
      </StyledContainer>
    </StyledSection>
  );
}
