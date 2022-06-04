import { render } from '@testing-library/react';
import * as React from 'react';
import { Icon } from '../Icon';
import { IconType } from '../types/Icon.enums';
import { IconProps } from '../types/Icon.interfaces';

const props: IconProps = {
  title: IconType.GITHUB,
};

describe('Header', () => {
  test('renders Icon with different titles', () => {
    const { getByTitle } = render(<Icon {...props} />);
    expect(getByTitle(IconType.GITHUB)).toBeInTheDocument();
  });
});
