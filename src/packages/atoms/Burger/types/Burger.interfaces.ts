export interface BurgerProps {
  isOpen: boolean;
  /**
   * color of burger menu
   */
  burgerColor?: string;
  /**
   * onClick callback for burger menu
   * @default '#000'
   */
  handleClick?: () => void;
}

/**
 * @description styled components
 */
export interface BurgerWrapperProps {
  isOpen: boolean;
  burgerColor: string;
}
