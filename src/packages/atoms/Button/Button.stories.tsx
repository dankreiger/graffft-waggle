import { Colors } from '@graffft-waggle/themes-portfolio';
import * as React from 'react';
import { Button } from './Button';
import { ButtonProps } from './types/Button.interfaces';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const SetProps = (args: ButtonProps) => (
  <div>
    <h3>
      Open <code>controls</code> to set props
    </h3>

    <Button {...args}>Click me</Button>
    <div style={{ margin: '20px' }} />

    <Button {...args} isOutline>
      Click me
    </Button>
  </div>
);

SetProps.args = {
  primary: Colors.Primary,
  secondary: Colors.Secondary,
  onClick: (e: any) => console.log('clicked: ', e),
};

export const Secondary = (args: ButtonProps) => (
  <div>
    <h3>
      Open <code>controls</code> to set props
    </h3>

    <Button {...args}>Click me</Button>
    <div style={{ margin: '20px' }} />

    <Button {...args} isOutline>
      Click me
    </Button>
  </div>
);

Secondary.args = {
  primary: Colors.Primary,
  secondary: Colors.Secondary,
  variant: 'secondary',
  onClick: (e: any) => console.log('clicked: ', e),
};
