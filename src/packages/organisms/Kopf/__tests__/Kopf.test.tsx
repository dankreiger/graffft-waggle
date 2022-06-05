import { within } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Kopf } from '../Kopf';
import { KopfHeaderLogoPostion } from '../Kopf.enums';
import { KopfProps } from '../Kopf.interfaces';
import { KopfHeaderNavItemsStTestID } from '../Kopf.styles';

const props: KopfProps = {
  headerLogo: (
    <a href="/home" aria-label="Portfolio Home">
      Home
    </a>
  ),
  headerNavItems: [
    { navItem: <div>Item #1</div>, key: '1' },
    { navItem: <div>Item #2</div>, key: '2' },
    { navItem: <div>Item #3</div>, key: '3' },
  ],
};

describe('Kopf', () => {
  test('renders header with logo', () => {
    const { getByLabelText } = render(<Kopf {...props} />);

    const logo = getByLabelText('Portfolio Home');
    expect(logo).toHaveTextContent('Home');
    expect(logo).toHaveAttribute('href', '/home');
  });

  test('renders header with nav menu and items', async () => {
    const { getByRole } = render(<Kopf {...props} />);
    const nav = getByRole('navigation');
    expect(nav).toBeTruthy();
    const container = (await document.querySelector(
      `[data-testid="${KopfHeaderNavItemsStTestID}"]`
    )) as HTMLElement;

    const items = await within(container).findAllByText(/Item #[0-9]/);

    expect(items).toHaveLength(props.headerNavItems.length);
  });

  test('calls default toggle mobile menu noop on click without error', () => {
    const { getByLabelText } = render(<Kopf {...props} />);

    fireEvent.click(getByLabelText('Open menu'));
  });

  test('calls toggle mobile menu on click', () => {
    const newProps = {
      ...props,
      handleToggleMobileMenu: jest.fn(),
    };
    const { getByLabelText } = render(<Kopf {...newProps} />);

    fireEvent.click(getByLabelText('Open menu'));
    expect(newProps.handleToggleMobileMenu).toHaveBeenCalled();
  });

  test('moves menu flex order to -1 when menu position is set to the left', () => {
    const newProps = {
      ...props,
      headerLogoPosition: KopfHeaderLogoPostion.LEFT,
    };
    const { getByLabelText } = render(<Kopf {...newProps} />);

    expect(window.getComputedStyle(getByLabelText('Open menu')).order).toBe(
      '-1'
    );
  });
});
