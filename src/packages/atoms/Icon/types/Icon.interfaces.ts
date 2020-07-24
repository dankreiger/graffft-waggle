import { IconType } from './Icon.enums';

export interface IconProps {
  /**
   * name of icon (also used in title tag)
   */
  title: IconType;
  /**
   * Hex color or color name
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string;
}
