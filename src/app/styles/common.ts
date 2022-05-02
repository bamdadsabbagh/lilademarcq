import {css} from 'styled-components';
import {HEADER_HEIGHT} from '../../constants';
import {headerGap} from '../../components/header/header.component.styles';

export const FullHeight = css`
  height: calc(100vh - ${HEADER_HEIGHT} - ${headerGap} / 3);
`;
