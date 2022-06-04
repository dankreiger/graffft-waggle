import { KopfHeaderLogoPostion } from './Kopf.enums';
import { NavItem } from '@graffft-waggle/expandable-side-nav';
import { ContainerMaxWidths } from '@graffft-waggle/container';
import { Breakpoints } from '@graffft-waggle/media-query';

export type KopfHeaderNavItem = NavItem;

export interface KopfProps {
  /**
   * Main header logo
   */
  headerLogo: string | number | JSX.Element;
  /**
   * sidenav disabled if true
   * @default false
   */
  sideNavDisabled?: boolean;
  /**
   * Optional side nav header logo
   */
  sideNavLogo?: string | number | JSX.Element;
  /**
   * if true, header is fixed to the top
   * @default true
   */
  isFixed?: boolean;
  /**
   * Nav items in header
   * An array of items. Each item is an object with:
   * - a unique key as a string for React VDOM
   * - navItem - the item to be rendered
   */
  headerNavItems: KopfHeaderNavItem[];

  /**
   * max width for header
   * @default '1800px'
   */
  headerMaxWidth?: string;

  /**
   * Nav items in mobile side nav
   * An array of items. Each item is an object with:
   * - a unique key as a string for React VDOM
   * - navItem - the item to be rendered
   */
  sideNavItems?: KopfHeaderNavItem[];

  /**
   * Min-width for non-mobile devices.
   * @default 768
   */
  desktopMinWidth?: number;
  /**
   * mobile menu open state
   * @default false
   */
  mobileMenuOpen?: boolean;
  /**
   * callback for toggling mobile menu
   * @default false
   */
  handleToggleMobileMenu?: () => void;
  /**
   * callback for closing mobile menu
   * @default false
   */
  handleCloseMobileMenu?: () => void;
  /**
   * Header background color
   * @default '#fff'
   */
  headerBackgroundColor?: string;
  /**
   * Header box shadow
   * @default '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)'
   */
  headerBoxShadow?: string;
  /**
   * Header burger color
   */
  headerBurgerColor?: string;
  /**
   * Header height
   * @default '60px'
   */
  headerHeight?: string;
  /**
   * Header logo position
   * @default 'left'
   */
  headerLogoPosition?: KopfHeaderLogoPostion;
  /**
   * Padding around each nav item
   * @default '0px 16px'
   */
  headerNavItemHorizontalPadding?: string;
  /**
   * Padding around mobile header
   * @default '0px 16px'
   */
  headerMobilePadding?: string;
  /**
   * Header padding
   * @default '0px 24px'
   */
  headerPadding?: string;
  /**
   * Header z-index
   * @default 200
   */
  headerZIndex?: number;

  containerMaxWidths?: ContainerMaxWidths;
  breakpoints?: Breakpoints;

  /**
   * custom scss for wrapper element
   * @default '''
   */
  customScss?: string;
}

// styled components
export interface KopfWrapperStProps {
  headerBackgroundColor: string;
  headerBoxShadow: string;
  headerHeight: string;
  headerZIndex: number;
  customScss: string;
  isFixed: boolean;
}

export interface KopfInnerWrapperStProps {
  desktopMinWidth: number;
  headerMaxWidth: string;
  headerMobilePadding: string;
  headerPadding: string;
}
export interface KopfHeaderMobileButtonStProps {
  desktopMinWidth: number;
  headerLogoPosition: KopfHeaderLogoPostion;
}
export interface KopfHeaderNavItemStProps {
  headerNavItemHorizontalPadding: string;
  headerLogoPosition: KopfHeaderLogoPostion;
  navItemColor?: string;
  navItemHoverColor?: string;
  navItemHoverBgColor?: string;
}

export interface KopfContainerStProps {
  containerMaxWidths?: ContainerMaxWidths;
  breakpoints?: Breakpoints;
}
