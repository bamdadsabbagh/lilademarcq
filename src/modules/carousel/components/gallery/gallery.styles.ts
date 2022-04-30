import styled from 'styled-components';
import {MAX_WIDTH} from '../../../../constants';

export const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;

  width: min(90%, ${MAX_WIDTH});

  top: -60px;

  pointer-events: none;
  user-select: none;
`;
