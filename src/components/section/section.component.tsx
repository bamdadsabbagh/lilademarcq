import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {Section, Wrapper} from './section.styles';
import {appLoadedAtom} from '../../atoms/app-loaded.atom';

export interface ContentSectionComponentProps {
  children: ReactElement | ReactElement[];
  backgroundColor?: string;
}

export function SectionComponent({
  children,
  backgroundColor,
}: ContentSectionComponentProps): ReactElement {
  const [appLoaded] = useAtom(appLoadedAtom);

  return (
    <Section backgroundColor={backgroundColor} skipTransition={appLoaded}>
      <Wrapper>
        {children}
      </Wrapper>
    </Section>
  );
}
