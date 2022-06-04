import { render } from '@testing-library/react';
import * as React from 'react';
import { ExpandableSideNav } from '../ExpandableSideNav';

describe('ExpandableSideNav', () => {
  test('renders ExpandableSideNav with 2 items', () => {
    const { getByLabelText, getAllByTestId } = render(
      <ExpandableSideNav
        sideNavLogo="Dog"
        sideNavItems={[
          { key: '123', navItem: 'dogs' },
          { key: '456', navItem: 'cats' },
        ]}
      />
    );

    getByLabelText('Expandable Side Navigation');
    expect(getAllByTestId(/expandable-side-nav-item-/i).length).toBe(2);
  });

  test('pointer-event: auto if menu is expanded ', () => {
    const { getByLabelText, getAllByTestId } = render(
      <ExpandableSideNav
        sideNavLogo="Dog"
        sideNavItems={[
          { key: '123', navItem: 'dogs' },
          { key: '456', navItem: 'cats' },
        ]}
        isExpanded
      />
    );

    const navWrapper = getByLabelText('Expandable Side Navigation');

    expect(navWrapper).toHaveStyle({ pointerEvents: 'auto' });
  });
});
