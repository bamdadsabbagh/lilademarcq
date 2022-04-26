import React, {ReactElement} from 'react';
import {useAtom} from 'jotai';
import {Section, Wrapper} from './section.styles';
import {isFirstDrawAtom} from '../../atoms/is-first-draw';

export interface ContentSectionComponentProps {
  children: ReactElement | ReactElement[];
  backgroundColor?: string;
}

export function SectionComponent({
  children,
  backgroundColor,
}: ContentSectionComponentProps): ReactElement {
  const [isFirstDraw] = useAtom(isFirstDrawAtom);

  return (
    <Section backgroundColor={backgroundColor} skipTransition={!isFirstDraw}>
      <Wrapper>
        {children}
      </Wrapper>
    </Section>
  );
}
