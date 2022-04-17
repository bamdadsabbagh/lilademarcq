import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {Container, Content} from './section.styles';
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
    <Container
      backgroundColor={backgroundColor ? backgroundColor : undefined}
      skipTransition={appLoaded ? 1 : 0}
    >
      <Content
        width={width ? width : undefined}
        verticalPadding={verticalPadding ? verticalPadding : undefined}
      >
        {children}
      </Content>
    </Container>
  );
}
