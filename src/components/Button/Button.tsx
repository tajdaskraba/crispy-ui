import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import './Button.scss';
import { ButtonVariant } from '../types';

const VARIANT_ICON_MAP = {
  primary: Icon.PaperPlane,
  secondary: Icon.ArrowBack,
} as const;

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
  
  const IconComponent = VARIANT_ICON_MAP[variant];
  const variantIcon = IconComponent ? <IconComponent /> : null;

  return (
    <button
      onClick={onClick}
      className={classNames(baseClass, `${baseClass}--${variant}`, className)} 
      {...props}
    >
      <span className={`${baseClass}__inner`}>
        <span className={`${baseClass}__label`}>{label}</span>
        <span className={`${baseClass}__icon`}>{variantIcon}</span>
      </span>
    </button>
  );
};

export default Button;