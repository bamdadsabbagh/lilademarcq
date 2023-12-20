import {ReactNode} from 'react';
import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';
import {fontSpectral} from '../../app/styles/fonts';
import {simpleTransition} from '../../app/styles/transitions';
import {MAX_WIDTH} from '../../constants';

interface ContainerProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: (JSX.Element | JSX.Element[])[];
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  user-select: none;

  padding-bottom: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

interface AwardProps {
  visible: boolean;
  children: JSX.Element[];
}

export const Award = styled.div<AwardProps>`
  width: 100%;
  max-width: calc(${MAX_WIDTH} * 0.4);
  text-align: center;

  display: grid;
  grid-template-rows: 1fr auto;
`;

export const ImageContainer = styled.div`
  display: block;

  margin: 0 auto;

  width: 9em;
  height: 9em;

  ${mediaQueries.above.mobile} {
    width: 12em;
    height: 12em;
  }
`;

interface ParagraphProps {
  visible: boolean;
  children: ReactNode;
}

export const TextContainer = styled.div<ParagraphProps>`
  ${fontSpectral};
  font-size: 1.3em;

  i {
    font-style: italic;
  }

  ${simpleTransition('opacity, max-height', 0.4)};
  opacity: ${({visible}) => (visible ? 1 : 0)};

  max-height: ${({visible}) => (visible ? '14em' : 0)};
  margin: 0 24px;

  ${mediaQueries.above.mobile} {
    font-size: 1.4em;
    margin: 0 1.4em;
  }

  ${mediaQueries.above.tablet} {
    margin: 0 3em;
  }
`;

interface ButtonContainerProps {
  children: JSX.Element;
  onClick: () => void;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
