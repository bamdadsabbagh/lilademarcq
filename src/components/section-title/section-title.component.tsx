import React, {ReactElement} from 'react';
import {Title} from './section-title.styles';

export interface ContentTitleComponentProps {
  children: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitleComponent({
  children,
  align = 'left',
}: ContentTitleComponentProps): ReactElement {
  return (
    <Title align={align}>
      {children}
    </Title>
  );
}
