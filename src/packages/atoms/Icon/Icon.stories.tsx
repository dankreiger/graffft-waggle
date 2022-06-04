import * as React from 'react';
import { Icon } from './index';
import { IconType } from './types/Icon.enums';
import { IconProps } from './types/Icon.interfaces';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

export const SetProps = (args: IconProps) => (
  <div>
    <h3>
      Open <code>controls</code> to set props
    </h3>
    <Icon {...args} />
  </div>
);

SetProps.args = { title: IconType.LINKEDIN, color: '#000' };
