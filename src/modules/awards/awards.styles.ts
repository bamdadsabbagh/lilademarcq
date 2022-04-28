import styled from 'styled-components';
import {fontSpectral} from '../../app/styles/fonts';
import {SECTION_SPACE_AROUND} from '../../constants';
import {simpleTransition} from '../../app/styles/transitions';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Container = styled.div`
  //display: grid;
    //grid-template-columns: ${SECTION_SPACE_AROUND} 1fr 1fr ${SECTION_SPACE_AROUND};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  user-select: none;

  padding-bottom: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

interface AwardProps {
  visible: boolean;
}

export const Award = styled.div<AwardProps>`
  width: 100%;
  text-align: center;

  display: grid;
  grid-template-rows: 1fr auto;
`;

export const ImageContainer = styled.div`
  ${mediaQueries.below.mobile} {
    width: 9em;
    height: 9em;
  }

  width: 12em;
  height: 12em;

  display: block;

  margin: 0 auto;
`;

interface ParagraphProps {
  visible: boolean;
}

export const TextContainer = styled.span<ParagraphProps>`
  ${mediaQueries.below.mobile} {
    max-height: ${({visible}) => visible ? '13em' : 0};
  }

  max-height: ${({visible}) => visible ? '8em' : 0};

  opacity: ${({visible}) => visible ? 1 : 0};

  ${simpleTransition('opacity, max-height', 0.4)};

  ${fontSpectral};
  font-size: 1.4em;
  margin: 0 1rem;

  i {
    font-style: italic;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
