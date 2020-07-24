export interface CircleBadgeProps {
  /**
   * child element(s)
   */
  children: JSX.Element | string | number;
  /**
   * width/height of circle badge
   * @default '84px'
   */
  size?: string;
  /**
   * background color of circle badge
   */
  bgColor?: string;
  /**
   * onClick callback
   */
  handleClick?: () => void;
  /**
   * custom scss for wrapper element
   */
  customScss?: string;
}

/**
 * @description styled components
 */
export interface CircleBadgeWrapperProps {
  size: string;
  bgColor: string;
  customScss: string;
}
