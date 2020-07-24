import * as React from 'react';
import { BurgerWrapperSt } from './Burger.styles';
import { BurgerProps } from './types/Burger.interfaces';

const Burger: React.FC<BurgerProps> = ({
  isOpen,
  burgerColor = '#000',
  handleClick = () => {},
}) => (
  <BurgerWrapperSt
    data-testid="burger"
    burgerColor={burgerColor}
    isOpen={isOpen}
    onClick={handleClick}
  >
    <span data-testid="burger-line-1" />
    <span data-testid="burger-line-2" />
    <span data-testid="burger-line-3" />
  </BurgerWrapperSt>
);

export { Burger };
