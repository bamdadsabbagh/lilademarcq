import {css} from 'styled-components';
import {FOOTER_HEIGHT, HEADER_HEIGHT} from '../../constants';
import {
  headerGap,
  headerGapMobile,
} from '../../components/header/header.component.styles';

export const MainHeight = css`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
`;

export const MainHeightMobile = css`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - ${headerGapMobile});
`;

export const FullHeight = css`
  height: calc(100vh - ${HEADER_HEIGHT} - ${headerGap} / 3);
`;
