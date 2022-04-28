import React, {ReactElement} from 'react';
import {Title} from './title.styles';
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
  paddingLeft?: boolean;
}

const defaultProps = {
  align: AlignKeys.left,
  color: theme.salmon,
  paddingLeft: false,
};

export function TitleComponent({
  children,
  align = defaultProps.align,
  color = defaultProps.color,
  paddingLeft = defaultProps.paddingLeft,
}: ContentTitleComponentProps): ReactElement {
  return (
    <Title align={align} color={color} paddingLeft={paddingLeft}>
      {children}
    </Title>
  );
}
