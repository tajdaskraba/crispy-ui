import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import './Button.scss';
import { ComponentVariant } from '../types';

const VARIANT_ICON_MAP = {
  primary: Icon.PaperPlane,
  secondary: Icon.ArrowBack,
} as const;

export interface ButtonProps {
  label: string;
  variant?: ComponentVariant;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  rightIcon,
  className,
  ...props
}) => {
  const baseClass = 'crispy-button';
  
  const IconComponent = VARIANT_ICON_MAP[variant];
  const variantIcon = IconComponent ? <IconComponent /> : null;

  return (
    <button 
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