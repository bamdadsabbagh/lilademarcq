import React, {ReactElement} from 'react';
import {StyledTitle} from './title.styles';

export interface ContentTitleComponentProps {
  children: string;
  align?: 'left' | 'center' | 'right';
}

export function TitleComponent({
  children,
  align = 'left',
}: ContentTitleComponentProps): ReactElement {
  return (
    <StyledTitle align={align}>
      {children}
    </StyledTitle>
  );
}
