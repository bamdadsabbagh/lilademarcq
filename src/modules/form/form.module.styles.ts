import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontFarmhouse, fontMontserrat} from '../../app/styles/fonts';
import {mediaQueries} from '../../app/styles/breakpoints';

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
  gap: 0.8em;

  color: ${(props) => props.theme.white};

  cursor: pointer;
  user-select: none;

  ${mediaQueries.above.mobile} {
    gap: 1.5em;
  }
`;

interface FormProps {
  visible: boolean;
}

export const Title = styled.h3`
  ${fontFarmhouse};
  font-size: 1.8em;

  ${mediaQueries.above.mobile} {
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.4em 5em 3em 3em 3em 2em auto;
  gap: 0 2em;

  width: 100%;
  max-width: 60rem;

  padding: 0.5em 1em;

  ${fontFarmhouse};
  font-size: 1.5em;

  color: white;

  user-select: none;
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

interface LabelProps {
  row: number | number[];
  column: number | number[];
  isColumn?: boolean;
}

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: ${({isColumn}) => isColumn ? 'column' : 'row'};
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  grid-row: ${({row}) => Array.isArray(row) ? row.join(' / ') : row};
  grid-column: ${({column}) => Array.isArray(column) ? column.join(' / ') : column};
`;

interface SubmitProps {
  backgroundColor: string;
  disabled: boolean;
}

const SubmitSuccess = css<SubmitProps>`
  color: ${({backgroundColor}) => backgroundColor};
  background: white;
`;

export const Submit = styled.button<SubmitProps>`
  grid-row: 6;
  grid-column: 3;
  align-self: flex-end;
  justify-self: flex-end;

  height: 100%;
  width: 100%;

  font-weight: 600;

  border: 3px solid white;
  border-radius: 10px;

  text-transform: uppercase;

  line-height: 2em;

  position: relative;
  ${simpleTransition('color')};

  ${({disabled}) => disabled && SubmitSuccess};

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

export const Subscribe = styled.div`
  grid-row: 6;
  grid-column: 1 / 3;

  display: flex;
  align-items: center;

  ${fontMontserrat};
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
  margin-left: 3rem;
  font-size: 0.75em;
  cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};
`;

export const GoogleContainer = styled.div`
  grid-row: 7;
  grid-column: 1 / 4;

  margin-top: 2em;

  ${fontMontserrat};
  font-size: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
