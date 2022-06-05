import { render } from '@testing-library/react';
import * as React from 'react';
import { Button } from '../Button';
import { ButtonProps } from '../types/Button.interfaces';

const props: ButtonProps = {
  primary: '#000',
  secondary: '#000',
  onClick: (e: any) => console.log('clicked: ', e),
  variant: 'primary',
  children: 'Dog',
};

describe('Button', () => {
  test('renders Button', () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText('Dog')).toBeInTheDocument();
  });
});
