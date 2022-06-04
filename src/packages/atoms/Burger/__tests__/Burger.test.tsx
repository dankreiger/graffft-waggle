import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Burger } from '../Burger';
import { BurgerProps } from '../types/Burger.interfaces';

const props: BurgerProps = {
  isOpen: false,
};

describe('Header', () => {
  test('renders Icon with different titles', () => {
    const { getByTestId } = render(<Burger {...props} />);
    expect(getByTestId('burger')).toBeInTheDocument();
  });

  test('calls default handleClick noop on click without error', () => {
    const { getByTestId } = render(<Burger {...props} />);
    const burger = getByTestId('burger');

    fireEvent.click(burger);
    expect(burger).toBeInTheDocument();
  });

  test('calls handleClick prop on click', () => {
    const newProps = {
      ...props,
      handleClick: jest.fn(),
    };
    const { getByTestId } = render(<Burger {...newProps} />);
    expect(newProps.handleClick).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('burger'));
    expect(newProps.handleClick).toHaveBeenCalledTimes(1);
  });

  test('burger lines have correct styles when menu is closed', () => {
    const closedBurgerProps: BurgerProps = {
      ...props,
      handleClick: jest.fn(),
    };
    const { getByTestId } = render(<Burger {...closedBurgerProps} />);
    const styleLine1 = window.getComputedStyle(getByTestId('burger-line-1'));
    const styleLine2 = window.getComputedStyle(getByTestId('burger-line-2'));
    const styleLine3 = window.getComputedStyle(getByTestId('burger-line-3'));

    // line 1
    expect(styleLine1.transform).toBe('rotate(0)');

    // line 2
    expect(styleLine2.transform).toBe('translateX(0)');
    expect(styleLine2.opacity).toBe('1');

    // line 3
    expect(styleLine3.transform).toBe('rotate(0)');
  });

  test('burger lines have correct styles when menu is open', () => {
    const openBurgerProps: BurgerProps = {
      ...props,
      isOpen: true,
      handleClick: jest.fn(),
    };
    const { getByTestId: closedBurger } = render(
      <Burger {...openBurgerProps} />
    );
    let styleLine1 = window.getComputedStyle(closedBurger('burger-line-1'));
    let styleLine2 = window.getComputedStyle(closedBurger('burger-line-2'));
    let styleLine3 = window.getComputedStyle(closedBurger('burger-line-3'));

    // line 1
    expect(styleLine1.transform).toBe('rotate(45deg)');

    // line 2
    expect(styleLine2.transform).toBe('translateX(20px)');
    expect(styleLine2.opacity).toBe('0');

    // line 3
    expect(styleLine3.transform).toBe('rotate(-45deg)');
  });
});
