import React from 'react';
import {theme} from '../../app/styles/theme';
import {PrimaryTitle, SecondaryTitle} from './title.component.styles';

export enum AlignKeys {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface ContentTitleComponentProps {
  children: string | JSX.Element;
  align?: AlignKeys;
  color?: string;
  paddingLeft?: boolean;
  noPaddingBottom?: boolean;
  isMain?: boolean;
}

const defaultProps = {
  align: AlignKeys.left,
  color: theme.salmon,
  paddingLeft: false,
  noPaddingBottom: false,
  isMain: false,
};

export function TitleComponent({
  children,
  align = defaultProps.align,
  color = defaultProps.color,
  paddingLeft = defaultProps.paddingLeft,
  noPaddingBottom = defaultProps.noPaddingBottom,
  isMain = defaultProps.isMain,
}: ContentTitleComponentProps): JSX.Element {
  return (
    <>
      {isMain ? (
        <PrimaryTitle
          align={align}
          color={color}
          paddingLeft={paddingLeft}
          noPaddingBottom={noPaddingBottom}
        >
          {children}
        </PrimaryTitle>
      ) : (
        <SecondaryTitle
          align={align}
          color={color}
          paddingLeft={paddingLeft}
          noPaddingBottom={noPaddingBottom}
        >
          {children}
        </SecondaryTitle>
      )}
    </>
  );
}
