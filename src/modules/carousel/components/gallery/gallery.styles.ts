import styled from 'styled-components';

export const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;

  width: min(90%, 1200px);

  top: -60px;

  pointer-events: none;
  user-select: none;
`;
