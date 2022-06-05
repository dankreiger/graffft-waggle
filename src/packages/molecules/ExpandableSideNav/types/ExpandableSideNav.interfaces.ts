export interface ExpandableSideNavProps {
  /**
   * aria-label for the nav container
   * @default 'Expandable Side Navigation'
   */
  ariaLabel?: string;
  /**
   * a logo for the side nav header
   * @default undefined
   */
  sideNavLogo?: string | number | JSX.Element;
  /**
   * Expanded state for sidenav
   * @default false
   */
  isExpanded?: boolean;
  /**
   * items in side nav
   * @default []
   */
  sideNavItems?: NavItem[];
  /**
   * z-index for expandable side nav
   * @default 300
   */
  expandableSideNavZIndex?: number;
  /**
   * expanded state background overlay color
   * @default 'rgba(0, 0, 0, 0.4)'
   */
  expandableSideNavBgOverlayColor?: string;
  /**
   * expanded state background menu color
   * @default '#fff'
   */
  expandableSideNavBgColor?: string;
  /**
   * callback function to close side nav
   * @default () => {}
   */
  handleCloseSideNav?: () => void;
  /**
   * true if nav should expand from left side of viewport
   * @default false
   */
  isSetToTheLeftSide?: boolean;
  /**
   * height of side nav header item
   * @default '77px'
   */
  sideNavHeaderHeight?: string;
  /**
   * height of each side nav item
   * @default '54px'
   */
  sideNavItemHeight?: string;

  /**
   * padding separating text from side nav border
   * @default '24px'
   */
  sideNavItemPadding?: string;

  /**
   * burger color in side nav
   * @default '#000'
   */
  sideNavBurgerColor?: string;
}

export interface NavItem {
  /**
   * key for react vDOM e.g. <li key={key}>text</li>
   */
  key: string;
  /**
   * item shown in nav
   */
  navItem: string | number | JSX.Element;
  /**
   * item color
   */
  navItemColor?: string;
  /**
   * item hover color
   */
  navItemHoverColor?: string;
  /**
   * item hover background color
   */
  navItemBgHoverColor?: string;
}

// styled components
export interface ExpandableSideNavWrapperStProps {
  isExpanded: boolean;
  expandableSideNavZIndex: number;
  expandableSideNavBgOverlayColor: string;
}

export interface ExpandableSideNavContentWrapperStProps {
  isExpanded: boolean;
  isSetToTheLeftSide: boolean;
  expandableSideNavBgColor: string;
}

export interface ExpandableSideNavItemStProps {
  navItemColor?: string;
  navItemHoverColor?: string;
  navItemHoverBgColor?: string;
  sideNavItemHeight?: string;
  isSetToTheLeftSide: boolean;
  sideNavItemPadding: string;
}
