import styled from 'styled-components';
import { AspectRatio } from './types/Image.interfaces';
import { aspectRatio } from '@graffft-waggle/aspect-ratio';

export const ImageWrapperSt = styled.div<{ aspectRatio: AspectRatio }>`
  ${({ aspectRatio: { width, height } }) => aspectRatio(width, height)}
`;
