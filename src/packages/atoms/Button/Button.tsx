import React from 'react';
import { ButtonSt } from './Button.css';
import { ButtonProps } from './types/Button.interfaces';
/**
 * @public
 * Primary Button component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  activeColor,
  activeBackgroundColor,
  borderWidth = '1px',
  children,
  disabled,
  isSelected = false,
  isOutline,
  onClick = () => undefined,
  padding,
  primary,
  secondary,
  variant = 'primary',
}) => {
  return (
    <ButtonSt
      activeColor={activeColor}
      activeBackgroundColor={activeBackgroundColor}
      isSelected={isSelected}
      borderWidth={borderWidth}
      disabled={disabled}
      onClick={onClick}
      isOutline={isOutline}
      padding={padding}
      primary={primary}
      secondary={secondary}
      variant={variant}
    >
      {children}
    </ButtonSt>
  );
};
