import styled from 'styled-components';
import {MAX_WIDTH} from '../../../../constants';
import {mediaQueries} from '../../../../app/styles/breakpoints';

export const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;

  pointer-events: none;
  user-select: none;

  width: 125%;
  top: -55px;
  transform: scale(0.5);

  ${mediaQueries.above.mobile} {
    width: min(90%, ${MAX_WIDTH});
    top: -60px;
    transform: scale(1);
  }
`;
