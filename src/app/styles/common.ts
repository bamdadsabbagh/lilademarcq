import {css} from 'styled-components';
import {HEADER_HEIGHT} from '../../constants';

export const FullHeight = css`
  height: calc(100vh - ${HEADER_HEIGHT} - 0.5rem);
`;
