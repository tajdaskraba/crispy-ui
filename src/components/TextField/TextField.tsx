import React, { useState } from 'react';
import classNames from 'classnames';
import './TextField.scss';
import Icon from '../Icon/Icon';
import { TextFieldVariant } from '../types';

interface TextFieldProps {
  label?: string;
  variant?: TextFieldVariant;
  validationError?: string;
  className?: string;
  onEnterPress?: (value: string) => void;
  onChange?: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  variant,
  validationError,
  className,
  onEnterPress,
  onChange,
  ...props
}) => {
  const baseClass = 'crispy-textfield';
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange?.(inputValue);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const inputValue = e.currentTarget.value;
      onEnterPress?.(inputValue);
    }
  };

  return (
    <div
      className={classNames(baseClass, {
        [`${baseClass}--${variant}`]: variant,
      }, className)}
    >
      {label && (
        <div className={`${baseClass}__label`}>
          <label>{label}</label>
        </div>
      )}
      <div className={`${baseClass}__container`}>
        <input
          className={`${baseClass}__input`}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          {...props}
        />
      </div>
      {validationError && (
        <div className={`${baseClass}__error-container`}>
          <Icon.WarningSign size={14} />
          <span className={`${baseClass}__error-text`}>{validationError}</span>
        </div>
      )}
    </div>
  );
};

export default TextField;
