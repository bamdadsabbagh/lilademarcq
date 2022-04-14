import styled from 'styled-components';
import {fontSizes} from '../../app/styles/font-sizes';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;

  > div {
    padding: 2em 0;

    span {
      font-style: italic;
      font-size: ${fontSizes.twelve};

      &::after {
        content: ' | ';
      }

      &:last-child::after {
        display: none;
      }
    }

  }
`;
