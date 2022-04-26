import styled from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontFarmhouse, fontMontserrat} from '../../app/styles/fonts';

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
  gap: 1em;

  color: ${(props) => props.theme.white};

  cursor: pointer;
  user-select: none;
`;

interface FormProps {
  visible: boolean;
}

export const Title = styled.h3`
  font-family: Farmhouse, serif;
  font-size: 2.4em;
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
  grid-template-rows: 1.4em 5em 3em 3em 3em 2em;
  gap: 0 2em;

  width: 100%;
  max-width: 60rem;

  padding: 0.5em 1em;

  ${fontFarmhouse};
  font-size: 1.5em;

  color: white;

  user-select: none;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;

  margin-left: 1em;

  border: 0;
  border-bottom: 1px solid white;

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

export const Input = styled.input`
  width: 100%;
  height: 2em;

  margin-top: 0.1em;

  ${fontMontserrat};
  font-size: 0.75em;
  color: white;

  ${simpleTransition('box-shadow, background')};
  box-shadow: 0 1px 0 0 white;

  &:focus, &:hover {
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.85);
    background: rgba(0, 0, 0, 0.03);
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: white;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: white;
    opacity: 1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: white;
    opacity: 1;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }
`;

interface SubmitProps {
  backgroundColor: string;
}

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

  &:hover {
    color: ${({backgroundColor}) => backgroundColor};

    &:before {
      top: 0;
    }
  }

  &:before {
    content: '';
    position: absolute;
    background: white;

    inset: 0;
    top: 100%;

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

export const SubscribeText = styled.span`
  margin-left: 3rem;
  font-size: 0.75em;

  &:hover {
    cursor: pointer;
  }
`;
