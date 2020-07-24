import React, { useState } from 'react';
import { Burger } from './index';
import { BurgerProps } from './types/Burger.interfaces';

export default {
  title: 'Atoms/Burger',
  component: Burger,
};

export const WithClick = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Burger
      isOpen={isOpen}
      burgerColor="#000"
      handleClick={() => setIsOpen(!isOpen)}
    />
  );
};

export const SetProps = (args: BurgerProps) => (
  <div>
    <h3>
      Open <code>controls</code> to set props
    </h3>
    <Burger {...args} />
  </div>
);

SetProps.args = { isOpen: false, burgerColor: '#000' };
