import React from 'react';
import { IconProps } from '../types';

const WarningSign: React.FC<IconProps> = ({ size = 14, color = '#d20300', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.36862 1.375H4.63138L0.875 5.13138V9.86862L4.63138 13.625H9.36862L13.125 9.86862V5.13138L9.36862 1.375ZM7.8505 11.4077H6.14862V9.70675H7.8505V11.4077ZM7.8505 8.00487H6.14862V3.7515H7.8505V8.00487Z"
      fill={color}
    />
  </svg>
);

export default WarningSign;
