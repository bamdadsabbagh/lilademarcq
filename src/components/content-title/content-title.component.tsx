import React, {ReactElement} from 'react';
import {Title} from './content-title.styles';

export interface ContentTitleComponentProps {
  children: string;
  align?: 'left' | 'center' | 'right';
}

export function ContentTitleComponent({
  children,
  align = 'left',
}: ContentTitleComponentProps): ReactElement {
  return (
    <Title align={align}>
      {children}
    </Title>
  );
}
