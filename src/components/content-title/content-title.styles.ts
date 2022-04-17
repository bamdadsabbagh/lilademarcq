import styled from 'styled-components';
import {fontFarmhouse} from '../../app/styles/fonts';
import {fontSizes} from '../../app/styles/font-sizes';
import {ContentTitleComponentProps} from './content-title.component';

type StyledTitleProps = Pick<ContentTitleComponentProps, 'align'>

export const StyledTitle = styled.h2<StyledTitleProps>`
  //margin-bottom: 1em;
  margin-bottom: 0.9em;

  color: ${({theme}) => theme.salmon};

  ${fontFarmhouse};
    // font-size: ${fontSizes.fiftyTwo};
  font-size: 4em;
  //font-size: 52pt;

  text-align: ${({align}) => align};
`;
