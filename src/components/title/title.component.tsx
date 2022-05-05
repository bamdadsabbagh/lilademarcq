import React, {ReactElement} from 'react';
import {Title} from './title.component.styles';
import {theme} from '../../app/styles/theme';

export enum AlignKeys {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ContentTitleComponentProps {
  children: string | ReactElement;
  align?: AlignKeys;
  color?: string;
  paddingLeft?: boolean;
  noPaddingBottom?: boolean;
}

const defaultProps = {
  align: AlignKeys.left,
  color: theme.salmon,
  paddingLeft: false,
  noPaddingBottom: false,
};

export function TitleComponent({
  children,
  align = defaultProps.align,
  color = defaultProps.color,
  paddingLeft = defaultProps.paddingLeft,
  noPaddingBottom = defaultProps.noPaddingBottom,
}: ContentTitleComponentProps): ReactElement {
  return (
    <Title
      align={align}
      color={color}
      paddingLeft={paddingLeft}
      noPaddingBottom={noPaddingBottom}
    >
      {children}
    </Title>
  );
}
