import styled from 'styled-components';
import Image from 'next/image';
import {Icon as Iconify} from '@iconify/react';
import {simpleTransition} from '../../app/styles/transitions';

export const Container = styled.div<{display: number;}>`
  position: absolute;
  ${simpleTransition('transform, opacity')};

  transform: translate(-50%, -50%) scale(${(props) => props.display ? 100 : 0}%);
  opacity: ${(props) => props.display ? 1 : 0};
`;

export const Icon = styled(Iconify)`
  position: absolute;
  color: ${(props) => props.theme.salmon};
  transform: translate(-50%, -50%);
  font-size: 100px;
`;

export const StyledImage = styled(Image)`
  border-radius: 100%;
`;
