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
  buttonHeight = 'auto',
  buttonWidth = 'auto',
  children,
  disabled,
  isSelected = false,
  isOutline,
  minHeight,
  onClick = () => undefined,
  padding,
  primary,
  secondary,
  variant = 'primary',
}) => {
  return (
    <ButtonSt
      activeColor={activeColor}
      buttonHeight={buttonHeight}
      activeBackgroundColor={activeBackgroundColor}
      isSelected={isSelected}
      borderWidth={borderWidth}
      buttonWidth={buttonWidth}
      minHeight={minHeight}
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

export const createButton =
  (variantColors: { primary: string; secondary: string }) =>
  (props: Omit<ButtonProps, 'primary' | 'secondary'>) =>
    (
      <Button
        {...props}
        primary={variantColors.primary}
        secondary={variantColors.secondary}
      />
    );
