import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontFarmhouse, fontMontserrat} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';
import {TextWidthMobile} from '../../app/styles/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4em;

  color: ${(props) => props.theme.white};

  cursor: pointer;
  user-select: none;

  ${mediaQueries.above.mobile} {
    gap: 1.1em;
  }
`;

interface FormProps {
  visible: boolean;
}

export const Title = styled.h3`
  ${fontFarmhouse};
  font-size: 1.6em;

  ${mediaQueries.above.mobile} {
    font-size: 1.8em;
  }

  ${mediaQueries.above.tablet} {
    font-size: 2em;
  }

  ${mediaQueries.above.desktop} {
    font-size: 2.2em;
  }

  ${mediaQueries.above.widescreen} {
    font-size: 2.4em;
  }
`;

export const FormContainer = styled.div<FormProps>`
  display: flex;
  justify-content: center;

  overflow: hidden;

  margin-top: ${({visible}) => visible ? '2em' : 0};
  max-height: ${({visible}) => visible ? '800px' : 0};
  opacity: ${({visible}) => visible ? 1 : 0};

  width: 100%;
  height: 100%;

  ${simpleTransition('max-height, opacity, margin-top', 0.25)}
`;

export const Form = styled.form`
  display: grid;

  ${TextWidthMobile};
  max-width: 60rem;

  color: ${({theme}) => theme.white};
  user-select: none;

  ${fontFarmhouse};
  font-weight: 400;
  font-size: 1.3em;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2em 3em 3em 3em 1.4em auto auto;
  gap: 1em 0.5em;

  ${mediaQueries.above.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1.4em 5em 3em 3em 3em 2em auto;
    gap: 0 2em;

    font-size: 1.5em;

    padding: 0.5em 1em;
  }
`;

interface SelectProps {
  backgroundColor: string;
  color: string;
}

export const Select = styled.select<SelectProps>`
  width: 100%;

  margin-left: 1em;

  border: 0;
  border-bottom: 1px solid white;

  color: ${({color}) => color};
  background: ${({backgroundColor}) => backgroundColor};

  ${fontMontserrat};
  font-size: 0.75em;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

export const LabelTopic = styled(Label)`
  grid-row: 1;
  grid-column: 1 / -1;

  ${mediaQueries.above.tablet} {
    grid-row: 1;
    grid-column: 1 / 4;
  }
`;

export const LabelName = styled(Label)`
  flex-direction: column;
  justify-content: center;

  grid-row: 2;
  grid-column: 1 / 3;

  ${mediaQueries.above.tablet} {
    justify-content: flex-end;

    grid-row: 2;
    grid-column: 1;
  }
`;

export const LabelFirstName = styled(Label)`
  flex-direction: column;
  justify-content: center;

  grid-row: 2;
  grid-column: 3 / -1;

  ${mediaQueries.above.tablet} {
    justify-content: flex-end;

    grid-row: 2;
    grid-column: 2;
  }
`;

export const LabelAddress = styled(Label)`
  flex-direction: column;
  grid-row: 3;
  grid-column: 1 / 3;

  ${mediaQueries.above.tablet} {
    grid-row: 2;
    grid-column: 3;
  }
`;

export const LabelPostcode = styled(Label)`
  flex-direction: column;
  grid-row: 3;
  grid-column: 3 / 4;

  ${mediaQueries.above.tablet} {
    grid-row: 3;
    grid-column: 3;
  }
`;

export const LabelCity = styled(Label)`
  flex-direction: column;
  grid-row: 3;
  grid-column: 4 / -1;

  ${mediaQueries.above.tablet} {
    grid-row: 4;
    grid-column: 3;
  }
`;

export const LabelContact = styled(Label)`
  flex-direction: column;
  grid-row: 4;
  grid-column: 1 / 3;

  ${mediaQueries.above.tablet} {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const LabelPhone = styled(Label)`
  flex-direction: column;
  grid-row: 4;
  grid-column: 3 / -1;

  ${mediaQueries.above.tablet} {
    grid-row: 4;
    grid-column: 2;
  }
`;

interface SubmitProps {
  backgroundColor: string;
  disabled: boolean;
}

const SubmitSuccess = css<SubmitProps>`
  color: ${({backgroundColor}) => backgroundColor};
  background: white;
`;

export const SubscribeContainer = styled.div`
  display: flex;
  align-items: center;

  ${fontMontserrat};

  grid-row: 5;
  grid-column: 1 / -1;

  ${mediaQueries.above.tablet} {
    grid-row: 6;
    grid-column: 1 / 3;
  }
`;

interface SubscribeCheckboxProps {
  backgroundColor: string;
  hover: boolean;
}

export const SubscribeCheckbox = styled.label<SubscribeCheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 100%;

  position: relative;
  user-select: none;

  transform: scale(0.6);

  ${mediaQueries.above.tablet} {
    transform: scale(1);
  }

  input {
    position: absolute;
    opacity: 0;
  }

  span {
    position: absolute;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 2px solid white;
    background: ${({hover}) => hover ? 'white' : 'transparent'};
    cursor: ${({hover}) => hover ? 'pointer' : 'inherit'};

    ${simpleTransition('background')};
  }

  input:checked ~ span {
    background: white;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 6px;
    top: 2px;
    width: 9px;
    height: 15px;
    border: solid ${({backgroundColor}) => backgroundColor};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

interface SubscribeTextProps {
  disabled: boolean;
}

export const SubscribeText = styled.span<SubscribeTextProps>`
  cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};

  margin-left: 1.5rem;
  font-size: 0.667em;

  ${mediaQueries.above.tablet} {
    margin-left: 3rem;
    font-size: 0.75em;
  }
`;

export const Submit = styled.button<SubmitProps>`
  align-self: flex-end;
  justify-self: flex-end;

  height: 100%;
  width: 100%;

  font-weight: 600;

  border: 2px solid white;
  border-radius: 10px;

  text-transform: uppercase;

  line-height: 2em;

  position: relative;
  ${simpleTransition('color')};

  ${({disabled}) => disabled && SubmitSuccess};

  grid-row: 6;
  grid-column: 1 / -1;

  ${mediaQueries.above.tablet} {
    grid-row: 6;
    grid-column: 3;
  }

  &:hover {
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    color: ${(props) => !props.disabled && props.backgroundColor};
    z-index: 1;

    &:before {
      top: 0;
    }
  }

  &:before {
    top: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    background: white;

    inset: 0;
    top: ${({disabled}) => !disabled && '100%'};

    z-index: -1;
    ${simpleTransition('top')};
  }
`;

export const GoogleContainer = styled.div`
  ${fontMontserrat};
  font-size: 0.6em;

  display: inline-block;
  text-align: center;

  grid-row: 7;
  grid-column: 1 / -1;

  ${mediaQueries.above.tablet} {
    margin-top: 2em;

    font-size: 0.9rem;

    grid-row: 7;
    grid-column: 1 / 4;
  }
`;
