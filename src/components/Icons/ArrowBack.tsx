import React from 'react';
import { IconProps } from '../types';

const ArrowBack: React.FC<IconProps> = ({ size = 16, color = 'white', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 6.50101C15 4.02001 12.981 2.00101 10.5 2.00101L6.99997 2.00101L6.99997 3.00101L10.5 3.00101C15.125 3.14801 15.124 9.85401 10.5 10.001L3.20697 10.001L5.60297 7.60501L4.89597 6.89801L1.29297 10.501L4.89597 14.105L5.60297 13.398L3.20697 11.002L10.5 11.002C12.981 11.002 15 8.98201 15 6.50101Z"
      fill={color}
    />
  </svg>
);

export default ArrowBack;
