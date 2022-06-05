export interface ButtonProps {
  /**
   * color when selected
   */
  activeColor?: string;
  activeBackgroundColor?: string;
  /**
   * The button's border width
   * @default '1px'
   */
  borderWidth?: string;
  buttonHeight?: string;
  buttonWidth?: string;
  /**
   * content in button
   */
  children: string | number | JSX.Element | React.ReactNode;
  /**
   * Hex color or color name
   */
  color?: string;

  /**
   * The button's onClick handler.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * true if button should be disabled
   */
  disabled?: boolean;
  /**
   * button min height in px
   */
  minHeight?: number;
  isSelected?: boolean;
  /**
   * true for an outline button
   */
  isOutline?: boolean;
  /**
   * padding css
   * @default '8px 16px'
   */
  padding?: string;
  /**
   * The color for primary shades
   */
  primary: string;
  /**
   * The color for primary shades
   */
  secondary: string;
  /**
   * The size of the Icon.
   */
  size?: string;

  /**
   * The type of the button.
   */
  variant: 'primary' | 'secondary';
}
