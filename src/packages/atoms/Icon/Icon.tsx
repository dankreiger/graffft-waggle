import React, { FC } from 'react';
import { IconMap } from './constants';
import { IconType } from './types/Icon.enums';
import { IconProps } from './types/Icon.interfaces';

const Icon: FC<IconProps> = ({
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
