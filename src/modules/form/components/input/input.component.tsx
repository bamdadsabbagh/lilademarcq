import React, {ChangeEvent, useState} from 'react';
import {FormRegex} from '../../../../utils/validate-form';
import {TextInput} from './input.component.styles';

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

export function InputComponent({
  name,
  disabled,
  defaultValue,
  placeholder,
  required = false,
  isEmail = false,
  isPostcode = false,
  isPhone = false,
  isTextAndNumber = false,
}: TextInputComponentProps): JSX.Element {
  const [, setValue] = useState('');

  const [pattern] = useState(() => {
    if (isEmail) {
      return FormRegex.email;
    } else if (isPostcode) {
      return FormRegex.postcode;
    } else if (isPhone) {
      return FormRegex.phone;
    } else if (isTextAndNumber) {
      return FormRegex.textAndNumbers;
    } else {
      return FormRegex.string;
    }
  });

  return (
    <>
      <TextInput
        type={isEmail ? 'email' : 'text'}
        name={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
        defaultValue={defaultValue}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        disabled={disabled}
      />
    </>
  );
}
