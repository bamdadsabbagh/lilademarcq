import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import {useAtom} from 'jotai';
import {FadeInAnimation} from '../../app/styles/animations';
import {isFirstDrawAtom} from '../../atoms/is-first-draw.atom';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100%;

  overflow: hidden;

  //margin-top: 2em;
  //margin-bottom: 1em;
`;

interface ContentProps {
  hover: boolean;
  skipTransition: boolean;
}

const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  //height: 520px;
  //height: 543px;
  //height: 434px;
  //height: 515px;
  //width: $w1;
  width: 100%;
  height: 100%;

  ${({skipTransition}) => FadeInAnimation(1, skipTransition ? 0 : 1.1)};

  &::before, &::after {
    content: '';
    position: absolute;
    height: 97%;
    width: 40px;
    top: 0;
    transition: background 200ms ease;
  }

  cursor: ${({hover}) => hover ? 'pointer' : 'default'};
  background: ${(props) => props.hover ? `rgba(${props.theme.white}, 0.5)` : 'transparent'};

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

interface DotProps {
  hover: boolean;
}

const Dot = styled.div<DotProps>`
  height: 40px;
  width: 10px;
  position: fixed;
  transform: rotateZ(-90deg);
  bottom: 2%;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: opacity 200ms ease;
  opacity: ${({hover}) => hover ? 1 : 0};

  span {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${({theme}) => theme.white};

    &:first-child {
      background: ${({theme}) => theme.grayDark};
    }

    cursor: ${({hover}) => hover ? 'pointer' : 'default'};
  }
`;

const triangleSize = 7;

interface TriangleProps {
  hover: boolean;
}

const Triangle = styled.div<TriangleProps>`
  position: absolute;
  width: 0;
  height: 0;
  border: ${triangleSize}px solid transparent;
  border-top: ${triangleSize}px solid;
  border-right: ${triangleSize}px solid;
  border-radius: 3px;
  color: ${({theme}) => theme.white};
  z-index: 100;
  pointer-events: none;
  opacity: ${({hover}) => hover ? 1 : 0};
  transition: opacity 200ms ease;
`;

const TriangleRight = styled(Triangle)<TriangleProps>`
  right: 17px;
  transform: rotateZ(45deg);
`;

const TriangleLeft = styled(Triangle)<TriangleProps>`
  left: 17px;
  transform: rotateZ(-135deg);
`;

const Footer = styled.div`
  position: absolute;
  height: 3%;
  width: 100%;
  bottom: 0;
  background: ${({theme}) => theme.green};
`;

export function HeroComponent(): ReactElement {
  const [hover, setHover] = useState(false);
  const [isFirstDraw] = useAtom(isFirstDrawAtom);

  return (
    <>
      <Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Content hover={hover} skipTransition={!isFirstDraw}>
          <Image>
            <img
              alt="hero"
              src="https://images.unsplash.com/photo-1613209476491-97cd142882d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1112&q=80"
            />
          </Image>

          <Dot hover={hover}>
            <span />
            <span />
            <span />
          </Dot>

          <TriangleRight hover={hover} />
          <TriangleLeft hover={hover} />

          <Footer />
        </Content>
      </Container>
    </>
  );
}
