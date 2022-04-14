import styled from 'styled-components';
import {fontFarmhouse} from '../../app/styles/fonts';
import {fontSizes} from '../../app/styles/font-sizes';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //padding: 2.75em 0;
  //padding: 3em 0;
`;

export const StyledTitle = styled.h3`
  ${fontFarmhouse};
  color: ${(props) => props.theme.white};
    // font-size: ${fontSizes.thirty};
  font-size: 3em;
  transform: translateY(0.05em);
`;
