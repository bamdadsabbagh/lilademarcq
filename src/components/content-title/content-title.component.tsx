import React, {ReactElement} from 'react';
import {StyledTitle} from './content-title.styles';

export interface ContentTitleComponentProps {
  children: string;
  align?: 'left' | 'center' | 'right';
}

export function ContentTitleComponent({
  children,
  align = 'left',
}: ContentTitleComponentProps): ReactElement {
  return (
    <StyledTitle align={align}>
      {children}
    </StyledTitle>
  );
}
