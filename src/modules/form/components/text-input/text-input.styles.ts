import styled, {css} from 'styled-components';
import {fontMontserrat} from '../../../../app/styles/fonts';
import {simpleTransition} from '../../../../app/styles/transitions';

interface TextInputProps {
  disabled: boolean;
}

const TextInputShadow = css`
  &:focus, &:hover {
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.85);
    background: rgba(0, 0, 0, 0.03);
  }
`;

const TextInputPrefixes = css`
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

export const TextInput = styled.input<TextInputProps>`
  width: 100%;
  height: 2em;

  margin-top: 0.1em;

  ${fontMontserrat};
  font-size: 0.75em;
  color: white;

  ${simpleTransition('box-shadow, background')};
  box-shadow: 0 1px 0 0 white;

  ${({disabled}) => !disabled && TextInputShadow};

  ${TextInputPrefixes};
`;
