import styled from 'styled-components';
import Image from 'next/image';
import {Icon} from '@iconify/react';
import {tf, to} from '../../app/styles/timers';

export const StyledContainer = styled.div<{display: number;}>`
  position: absolute;
  transition: all calc((0.2s + ${to}s) * ${tf}) ease;

  transform: translate(-50%, -50%) scale(${(props) => props.display ? 100 : 0}%);
  opacity: ${(props) => props.display ? 1 : 0};
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  color: ${(props) => props.theme.salmon};
  transform: translate(-50%, -50%);
  font-size: 100px;
`;

export const StyledImage = styled(Image)`
  border-radius: 100%;
`;
