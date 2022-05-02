import styled, {css} from 'styled-components';
import {mediaQueries} from '../../../../app/styles/breakpoints';

interface ContainerProps {
  size: number;
  fontSize: number;
  x: number;
  y: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  width: ${({size}) => size}em;
  height: ${({size}) => size}em;

  position: relative;
  left: ${({x}) => x}%;
  top: ${({y}) => y}%;

  border-radius: 100%;

  background: rgba(105, 140, 115, 0.9);
  color: white;

  overflow: hidden;
  font-size: 1em;
  transform: translateX(-15%);

  ${mediaQueries.above.mobile} {
    transform: translateX(-20%);
  }

  ${mediaQueries.above.tablet} {
    font-size: 1.1em;
    transform: translateX(-5%);
  }

  ${mediaQueries.above.desktop} {
    font-size: 1.2em;
  }

  ${mediaQueries.above.widescreen} {
    font-size: 1.3em;
    transform: translateX(-5%);
  }

  ${mediaQueries.above.fullhd} {
    font-size: 1.4em;
  }
`;

const TileBody = css`
  width: 80%;
  padding: 0 1.2em;
`;

export const Title = styled.span`
  ${TileBody};
  font-weight: 600;
`;

const BodyPaddingLeft = css`
  padding-left: 2em;
`;

interface BodyProps {
  paddingLeft: boolean;
}

export const Body = styled.span<BodyProps>`
  ${TileBody};
  ${({paddingLeft}) => paddingLeft && BodyPaddingLeft};
`;
