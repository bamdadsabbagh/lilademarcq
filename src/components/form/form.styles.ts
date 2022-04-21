import styled, {css} from 'styled-components';
import {simpleTransition} from '../../app/styles/transitions';
import {fontFarmhouse, fontMontserrat} from '../../app/styles/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //padding: 2.75em 0;
  //padding: 3em 0;
`;

export const Title = styled.h3`
  ${fontFarmhouse};
  font-size: 3em;

  color: ${(props) => props.theme.white};

  transform: translateY(0.05em);

  cursor: pointer;
  user-select: none;
`;

interface FormProps {
  visible: boolean;
}

export const FormContainer = styled.div<FormProps>`
  overflow: hidden;

  margin-top: ${({visible}) => visible ? '2em' : 0};
  max-height: ${({visible}) => visible ? '800px' : 0};
  opacity: ${({visible}) => visible ? 1 : 0};

  width: 100%;
  height: 100%;

  ${simpleTransition('max-height, opacity, margin-top')}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.4em 5em 3em 3em 3em 2em;
  gap: 0 2em;

  width: 100%;

  padding: 0.5em 1em;

  ${fontFarmhouse};
  font-size: 1.6em;

  color: white;

  user-select: none;
`;

const customArrow = css`
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>') no-repeat right;  
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;

  margin-left: 1em;

  border: 0;
  border-bottom: 1px solid white;
  color: black;
  ${fontMontserrat};
  font-size: 0.7em;

    //${customArrow};
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

  margin-top: 0.1em;

  ${fontMontserrat};
  height: 2em;
  font-size: 0.7em;
  border-bottom: 1px solid white;

  color: white;

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

export const Submit = styled.button<{backgroundColor: string;}>`
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
  transition: 0.08s ease-in;

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

    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;

    z-index: -1;
    transition: top 0.09s ease-in;
  }
`;

export const Subscribe = styled.div`
  grid-row: 6;
  grid-column: 1 / 3;

  display: flex;
  align-items: center;

  ${fontMontserrat};
  font-size: 0.7em;
`;

export const SubscribeCheckbox = styled.label<{backgroundColor: string;}>`
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
    background: transparent;
    border: 2px solid white;

    ${simpleTransition('background')};

    &:hover {
      background: white;
      cursor: pointer;
    }
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
  margin-left: 2em;
`;
