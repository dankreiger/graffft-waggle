import { IconType } from '@graffft-waggle/icon';
import { SocialBannerDirection } from './SocialBanner.enums';

interface ButtonLink {
  iconTitle: IconType;
  buttonColor: string;
  iconColor: string;
  href: string;
}
export interface SocialBannerProps {
  /**
   * link items with icon information
   */
  buttonLinks: ButtonLink[];
  /**
   * size (width and height) of the banner item
   * @default 24
   */
  linkSize?: number;
  /**
   * padding inside banner item
   * @default 4
   */
  paddingSize?: number;
  /**
   * margin between banner items
   * @default '5px'
   */
  itemMargin?: string;
  /**
   * direction of items
   */
  direction?: SocialBannerDirection;
  /**
   * custom scss for wrapper element
   */
  customScss?: string;
}

/**
 * @description styled components
 */

export interface SocialBannerWrapperProps {
  direction: SocialBannerDirection;
  customScss: string;
}
export interface SocialBannerItemProps {
  buttonColor: string;
  linkSize: number;
  paddingSize: number;
  itemMargin: string;
}
