import React, {ReactElement, useState} from 'react';
import {TextInput} from './text-input.styles';

interface TextInputComponentProps {
  name: string;
  disabled: boolean;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  isEmail?: boolean;
  isPostcode?: boolean;
  isPhone?: boolean;
  isTextAndNumber?: boolean;
}

export function TextInputComponent({
  name,
  disabled,
  defaultValue,
  placeholder,
  required = false,
  isEmail = false,
  isPostcode = false,
  isPhone = false,
  isTextAndNumber = false,
}: TextInputComponentProps): ReactElement {
  const [, setValue] = useState('');

  const [pattern] = useState(() => {
    if (isEmail) {
      return '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    } else if (isPostcode) {
      return '^[A-Z0-9]{5}$';
    } else if (isPhone) {
      return '^[0-9+]+$';
    } else if (isTextAndNumber) {
      return '^[A-Za-zÀ-Ÿ0-9 .-]+$';
    } else {
      return '^[A-Za-zÀ-Ÿ .-]+$';
    }
  });

  return (
    <>
      <TextInput
        type={isEmail ? 'email' : 'text'}
        name={name}
        onChange={(e) => setValue(e.currentTarget.value)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        disabled={disabled}
      />
    </>
  );
}
