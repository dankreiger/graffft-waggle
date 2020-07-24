import React, { useRef } from 'react';
import {
  ExpandableSideNavWrapperSt,
  ExpandableSideNavContentWrapperSt,
  ExpandableSideNavHeaderSt,
  ExpandableSideNavItemsSt,
  ExpandableSideNavItemSt,
  ExpandableSideNavHeaderLogoSt,
  ExpandableSideNavCloseButtonWrapperSt,
} from './ExpandableSideNav.styles';
import {
  ExpandableSideNavProps,
  NavItem,
} from './types/ExpandableSideNav.interfaces';
import { Burger } from '@graffft-waggle/burger';
import useOnClickOutside from 'use-onclickoutside';

const ExpandableSideNav: React.FC<ExpandableSideNavProps> = ({
  sideNavLogo,
  isExpanded = false,
  sideNavItems = [],
  expandableSideNavZIndex = 300,
  expandableSideNavBgOverlayColor = 'rgba(0, 0, 0, 0.4)',
  sideNavItemHeight = '54px',
  sideNavHeaderHeight = '77px',
  sideNavItemPadding = '24px',
  handleCloseSideNav = () => {},
  isSetToTheLeftSide = false,
  sideNavBurgerColor = '#000',
}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, handleCloseSideNav);
  return (
    <ExpandableSideNavWrapperSt
      aria-label="Expandable Side Navigation"
      isExpanded={isExpanded}
      expandableSideNavZIndex={expandableSideNavZIndex}
      expandableSideNavBgOverlayColor={expandableSideNavBgOverlayColor}
    >
      <ExpandableSideNavContentWrapperSt
        isSetToTheLeftSide={isSetToTheLeftSide}
        isExpanded={isExpanded}
        ref={ref}
      >
        <ExpandableSideNavHeaderSt
          isSetToTheLeftSide={isSetToTheLeftSide}
          sideNavItemPadding={sideNavItemPadding}
          sideNavHeaderHeight={sideNavHeaderHeight}
        >
          <ExpandableSideNavHeaderLogoSt>
            {sideNavLogo}
          </ExpandableSideNavHeaderLogoSt>
          <ExpandableSideNavCloseButtonWrapperSt
            isSetToTheLeftSide={isSetToTheLeftSide}
            sideNavItemPadding={sideNavItemPadding}
          >
            <Burger
              isOpen={true}
              handleClick={handleCloseSideNav}
              burgerColor={sideNavBurgerColor}
            />
          </ExpandableSideNavCloseButtonWrapperSt>
        </ExpandableSideNavHeaderSt>
        <ExpandableSideNavItemsSt>
          {sideNavItems.map((navProps: NavItem) => (
            <ExpandableSideNavItemSt
              key={navProps.key}
              isSetToTheLeftSide={isSetToTheLeftSide}
              sideNavItemPadding={sideNavItemPadding}
              sideNavItemHeight={sideNavItemHeight}
              navItemColor={navProps.navItemColor}
              navItemHoverColor={navProps.navItemHoverColor}
              navItemHoverBgColor={navProps.navItemBgHoverColor}
              data-testid={`expandable-side-nav-item-${navProps.key}`}
            >
              {navProps.navItem}
            </ExpandableSideNavItemSt>
          ))}
        </ExpandableSideNavItemsSt>
      </ExpandableSideNavContentWrapperSt>
    </ExpandableSideNavWrapperSt>
  );
};

export { ExpandableSideNav };
