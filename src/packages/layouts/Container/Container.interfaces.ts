import { ContainerMaxWidths } from './Container.types';
import { Breakpoints } from '@graffft-waggle/media-query';

// styled components
export interface ContainerStProps {
  containerMaxWidths?: ContainerMaxWidths;
  breakpoints?: Breakpoints;
  customScss?: string;
  /**
   * @default false
   * sets container height to 100%
   */
  fullHeight?: boolean;
}

export interface ContainerGeneratorProps {
  containerMaxWidths?: ContainerMaxWidths;
  breakpoints?: Breakpoints;
  fullHeight?: boolean;
}
