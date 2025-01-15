import React from 'react';
import { IconProps } from '../types';

const PaperPlane: React.FC<IconProps> = ({ size = 16, color = 'white', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.81 1.36698C14.665 1.25298 14.47 1.22698 14.3 1.30198L0.799999 7.20098C0.445999 7.34298 0.396999 7.86798 0.718999 8.07298L4 10.301V14.535C3.986 14.988 4.603 15.214 4.884 14.855L7.2 12.083C7.229 12.121 7.257 12.16 7.298 12.19L11.824 15.481C12.108 15.7 12.558 15.519 12.61 15.165L14.992 1.84798C15.024 1.66598 14.954 1.48198 14.809 1.36798L14.81 1.36698ZM11.603 3.57098L4.472 9.41298L2.031 7.75498L11.603 3.57098ZM5 10.272L12.634 4.01898L5 13.157V10.272ZM11.767 14.203L7.886 11.382C7.864 11.366 7.838 11.361 7.814 11.349L13.493 4.54998L11.766 14.203H11.767Z"
      fill={color}
    />
  </svg>
);

export default PaperPlane;
