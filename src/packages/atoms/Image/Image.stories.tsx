import React from 'react';
import { Image } from './index';
import { ImageProps } from './types/Image.interfaces';

export default {
  title: 'Atoms/Image',
  component: Image,
};

export const Example = (args: ImageProps) => {
  return (
    <div style={{ maxWidth: '300px' }}>
      <Image {...args} />
    </div>
  );
};

Example.args = {
  aspectRatio: {
    width: 736,
    height: 920,
  },
  imgSrc:
    'https://i.pinimg.com/originals/d2/6b/0a/d26b0a6836f7a073d1ef0d322f6599d5.jpg',
  imgAlt: 'puppy',
};
