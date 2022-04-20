import React, {ReactElement} from 'react';
import {Title} from './section-title.styles';
import {theme} from '../../app/styles/theme';

export enum AlignKeys {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ContentTitleComponentProps {
  children: string;
  align?: AlignKeys;
  color?: string;
  bottomPadding?: number;
}

const defaultProps = {
  align: AlignKeys.left,
  color: theme.salmon,
  bottomPadding: 0.9,
};

export function SectionTitleComponent({
  children,
  align = defaultProps.align,
  color = defaultProps.color,
  bottomPadding = defaultProps.bottomPadding,
}: ContentTitleComponentProps): ReactElement {
  return (
    <Title align={align} color={color} bottomPadding={bottomPadding}>
      {children}
    </Title>
  );
}
