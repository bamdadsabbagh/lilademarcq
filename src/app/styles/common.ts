import {css} from 'styled-components';
import {HEADER_HEIGHT, PADDING} from '../../constants';
import {
  headerGap,
  headerGapMobile,
} from '../../components/header/header.component.styles';

export const MainHeight = css`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${headerGap} - 4px);
`;

export const MainHeightMobile = css`
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${headerGapMobile});
`;

export const FullHeight = css`
  height: calc(100vh - ${HEADER_HEIGHT} - ${headerGap} / 3);
`;

export const TextWidthMobile = css`
  width: calc(100% - ${PADDING} * 0.5);
`;

export const FocusHoverShadow = css`
  &:focus, &:hover {
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.85);
    background: rgba(0, 0, 0, 0.03);
  }
`;
