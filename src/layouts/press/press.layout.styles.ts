import styled from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontFarmhouse} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface ButtonProps {
  backgroundColor: string;
}

export const Button = styled.button<ButtonProps>`
  align-self: flex-end;
  justify-self: flex-end;

  height: 100%;
  width: 100%;

  border: 1px solid ${({theme}) => theme.black};
  border-radius: 10px;

  padding: 0.5em 1em;

  position: relative;
  ${simpleTransition('color, background')};

  &:hover {
    background: ${({theme}) => theme.black};
    color: ${({backgroundColor}) => backgroundColor};
  }

  ${fontFarmhouse};
  font-size: 1em;

  ${mediaQueries.above.mobile} {
    font-size: 1.2em;
  }
`;
