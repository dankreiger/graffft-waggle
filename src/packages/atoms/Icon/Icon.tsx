import React from 'react';

import { IconMap } from './constants';
import { IconProps } from './types/Icon.interfaces';
import { IconType } from './types/Icon.enums';

const Icon: React.FC<IconProps> = ({
  title,
  color = '#000',
  size = '24px',
  ...others
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    {...others}
  >
    <title>{title}</title>
    <path d={IconMap.get(title as IconType)?.svgPath} />
  </svg>
);

export { Icon };
