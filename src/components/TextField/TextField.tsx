import React, { useState } from 'react';
import classNames from 'classnames';
import './TextField.scss';
import { ComponentVariant } from '../types';

interface TextFieldProps {
  label?: string;
  variant?: string;
  placeholder?: string;
  validationError?: string;
  validate?: (value: string) => boolean;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  variant = 'secondary',
  placeholder,
  validate = (value) => !/\d/.test(value),
  className,
  ...props
}) => {
  const baseClass = 'crispy-textfield';
  
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError(!validate(inputValue));
  };

  return (
<div
  className={classNames(baseClass, {
    [`${baseClass}--${variant}`]: variant,
    [`${baseClass}--error`]: error,
  }, className)}
>
  {label && (
    <div className={`${baseClass}__label`}>
      <label>
        {label}
      </label>
    </div>
  )}
  <div className={`${baseClass}__container`}>
    <input
      className={`${baseClass}__input`}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  </div>
</div>

  );
};

export default TextField;
