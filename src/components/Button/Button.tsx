import React from 'react';
import classNames from 'classnames';
import './Button.scss';
import { ButtonVariant } from '../types';

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  rightIcon,
  className,
  onClick,
  ...props
}) => {
  const baseClass = 'crispy-button';

  return (
    <button
      onClick={onClick}
      className={classNames(baseClass, `${baseClass}--${variant}`, className)}
      {...props}
    >
      <span className={`${baseClass}__inner`}>
        <span className={`${baseClass}__label`}>{label}</span>
        <span className={`${baseClass}__icon`}>{rightIcon}</span>
      </span>
    </button>
  );
};

export default Button;
