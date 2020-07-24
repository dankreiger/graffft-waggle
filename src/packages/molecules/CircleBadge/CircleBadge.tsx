import React from 'react';
import { CircleBadgeWrapperSt } from './CircleBadge.styles';
import { CircleBadgeProps } from './types/CircleBadge.interfaces';

export const CircleBadge: React.FC<CircleBadgeProps> = ({
  children,
  size = '86px',
  bgColor = '#fff',
  handleClick = () => {},
  customScss = '',
}) => (
  <CircleBadgeWrapperSt
    size={size}
    bgColor={bgColor}
    customScss={customScss}
    onClick={handleClick}
  >
    {children}
  </CircleBadgeWrapperSt>
);
