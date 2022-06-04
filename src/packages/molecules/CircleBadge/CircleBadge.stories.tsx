import { Icon, IconMap, IconType } from '@graffft-waggle/icon';
import * as React from 'react';
import { CircleBadge } from './CircleBadge';
import { CircleBadgeProps } from './types/CircleBadge.interfaces';

export default {
  title: 'Molecules/CircleBadge',
  component: CircleBadge,
};

export const OneBadge = () => (
  <CircleBadge>
    <Icon
      title={IconType.JAVASCRIPT}
      size="calc(100% - 40px)"
      color={IconMap.get(IconType.JAVASCRIPT)?.defaultColor}
    />
  </CircleBadge>
);

export const TextExample = (args: CircleBadgeProps) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'linear-gradient(#66C5FF, #33B1FF)',
      height: '100vh',
    }}
  >
    <CircleBadge>Ich</CircleBadge>
    <CircleBadge>bin</CircleBadge>
    <CircleBadge>ein</CircleBadge>
    <CircleBadge>Hündchen</CircleBadge>
  </div>
);

export const SetProps = (args: CircleBadgeProps) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'linear-gradient(#66C5FF, #33B1FF)',
      height: '100vh',
    }}
  >
    {Object.values(IconType).map((title) => (
      <CircleBadge key={title} {...args}>
        <Icon
          title={title}
          size="calc(100% - 40px)"
          color={IconMap.get(title)?.defaultColor}
        />
      </CircleBadge>
    ))}
  </div>
);

SetProps.args = { size: '86px' };
