import { Burger } from '@graffft-waggle/burger';
import { ExpandableSideNav } from '@graffft-waggle/expandable-side-nav';
import * as React from 'react';
import { useMenuToggler } from './hooks';
import { KopfHeaderLogoPostion } from './Kopf.enums';
import { KopfHeaderNavItem, KopfProps } from './Kopf.interfaces';
import {
  KopfContainerSt,
  KopfHeaderMobileButtonSt,
  KopfHeaderNavItemsSt,
  KopfHeaderNavItemSt,
  KopfInnerWrapperSt,
  KopfLogoSt,
  KopfSpacerSt,
  KopfWrapperSt
} from './Kopf.styles';

const defaultHeaderLogoPosition = KopfHeaderLogoPostion.RIGHT;
export const KopfHeaderNavItemsStTestID = 'desktop-header-nav-items';

const KopfCmp: React.FC<KopfProps> = ({
  desktopMinWidth = 768,
  headerBackgroundColor = '#fff',
  isFixed = true,
  sideNavDisabled = false,
  headerMaxWidth = '1800px',
  headerBoxShadow = '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
  headerBurgerColor,
  headerHeight = '60px',
  headerLogo,
  sideNavLogo,
  headerLogoPosition = defaultHeaderLogoPosition,
  headerNavItems,
  sideNavItems,
  headerNavItemHorizontalPadding = '16px',
  headerMobilePadding = '0px',
  headerPadding = '0px',
  headerZIndex = 200,
  mobileMenuOpen = false,
  handleToggleMobileMenu = () => {},
  handleCloseMobileMenu = () => {},
  customScss = '',
  containerMaxWidths,
  breakpoints,
}) => {
  return (
    <>
      <KopfWrapperSt
        headerBackgroundColor={headerBackgroundColor}
        headerBoxShadow={headerBoxShadow}
        headerHeight={headerHeight}
        headerZIndex={headerZIndex}
        customScss={customScss}
        isFixed={isFixed}
      >
        <KopfContainerSt
          containerMaxWidths={containerMaxWidths}
          breakpoints={breakpoints}
        >
          <KopfInnerWrapperSt
            desktopMinWidth={desktopMinWidth}
            headerMaxWidth={headerMaxWidth}
            headerMobilePadding={headerMobilePadding}
            headerPadding={headerPadding}
          >
            <KopfLogoSt headerLogoPosition={headerLogoPosition}>
              {headerLogo}
            </KopfLogoSt>
            <KopfHeaderNavItemsSt
              desktopMinWidth={desktopMinWidth}
              headerLogoPosition={headerLogoPosition}
              headerNavItemHorizontalPadding={headerNavItemHorizontalPadding}
            >
              {headerNavItems.map((navProps: KopfHeaderNavItem) => (
                <KopfHeaderNavItemSt
                  key={navProps.key}
                  headerLogoPosition={headerLogoPosition}
                  headerNavItemHorizontalPadding={
                    headerNavItemHorizontalPadding
                  }
                  navItemColor={navProps.navItemColor}
                  navItemHoverColor={navProps.navItemHoverColor}
                  navItemHoverBgColor={navProps.navItemBgHoverColor}
                >
                  {navProps.navItem}
                </KopfHeaderNavItemSt>
              ))}
            </KopfHeaderNavItemsSt>
            <KopfHeaderMobileButtonSt
              desktopMinWidth={desktopMinWidth}
              headerLogoPosition={headerLogoPosition}
              onClick={handleToggleMobileMenu}
            >
              <Burger isOpen={mobileMenuOpen} burgerColor={headerBurgerColor} />
            </KopfHeaderMobileButtonSt>
          </KopfInnerWrapperSt>
        </KopfContainerSt>
      </KopfWrapperSt>
      {!sideNavDisabled && (
        <ExpandableSideNav
          sideNavLogo={sideNavLogo}
          handleCloseSideNav={handleCloseMobileMenu}
          isExpanded={mobileMenuOpen}
          sideNavItems={sideNavItems}
          sideNavBurgerColor={headerBurgerColor}
          expandableSideNavBgColor={headerBackgroundColor}
        />
      )}
      {isFixed && <KopfSpacerSt headerHeight={headerHeight} />}
    </>
  );
};

export const Kopf: React.FC<KopfProps> = (props) => {
  let kopfProps = { ...props };
  const extra = useMenuToggler();

  // if no side nav items (mobile) passed, assign given header nav items to side nav items
  if (!props.sideNavItems) {
    kopfProps = {
      ...kopfProps,
      sideNavItems: props.headerNavItems,
    };
  }

  // if there's no attempt to control the mobile menu, give it sensible defaults
  if (
    !props.handleToggleMobileMenu &&
    !props.mobileMenuOpen &&
    !props.handleCloseMobileMenu
  ) {
    kopfProps = { ...kopfProps, ...extra };
  }
  return <KopfCmp {...kopfProps} />;
};
