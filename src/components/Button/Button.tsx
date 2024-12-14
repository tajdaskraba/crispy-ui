import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import './Button.scss';

type ButtonVariant = 'primary' | 'secondary';

const VARIANT_ICON_MAP = {
  primary: Icon.PaperPlane,
  secondary: Icon.ArrowBack,
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
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
        <span className={`${baseClass}__label`}>{children}</span>
        <span className={`${baseClass}__icon`}>{variantIcon}</span>
      </span>
    </button>
  );
};

export default Button;