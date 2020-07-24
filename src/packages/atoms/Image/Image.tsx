import React, { FC } from 'react';
import { ImageProps } from './types/Image.interfaces';
import { ImageWrapperSt } from './Image.styles';

export const Image: FC<ImageProps> = ({ aspectRatio, imgSrc, imgAlt }) => (
  <ImageWrapperSt aspectRatio={aspectRatio}>
    <img src={imgSrc} alt={imgAlt} />
  </ImageWrapperSt>
);
