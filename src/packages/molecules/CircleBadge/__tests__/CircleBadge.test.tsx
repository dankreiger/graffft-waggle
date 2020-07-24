import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CircleBadge } from '../CircleBadge';
import { CircleBadgeProps } from '../types/CircleBadge.interfaces';

describe('CircleBadge', () => {
  test('renders CircleBade with children', () => {
    const { getByText } = render(<CircleBadge>dog</CircleBadge>);
    expect(getByText('dog')).toBeInTheDocument();
  });

  test('calls custom handleClick props', () => {
    const props: CircleBadgeProps = {
      children: <h1>woof</h1>,
      handleClick: jest.fn(),
    };
    const { getByText } = render(<CircleBadge {...props} />);
    expect(props.handleClick).not.toHaveBeenCalled();
    fireEvent.click(getByText('woof'));
    expect(props.handleClick).toHaveBeenCalled();
  });
  test('calls default noop handleClick without error', () => {
    const props: CircleBadgeProps = {
      children: <h1>woof</h1>,
    };
    const { getByText } = render(<CircleBadge {...props} />);

    fireEvent.click(getByText('woof'));
  });
});
