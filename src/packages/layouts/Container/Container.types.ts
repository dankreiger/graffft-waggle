import { Breakpoint } from '@graffft-waggle/media-query';

export type ContainerMaxWidths = {
  [key in Breakpoint]: number;
};
