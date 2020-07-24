import { NavItem } from '@graffft-waggle/expandable-side-nav';

export interface SimpleFooterProps {
  /**
   * footerCopyrightText
   * @default new Date().getFullYear()
   */
  footerCopyrightText?: string;
  /***
   * @default '#fff'
   */
  footerCopyrightTextColor?: string;
  /**
   * @default []
   * items shown in footer
   */
  footerItems?: NavItem[];

  /**
   * footer height css
   * @default '44px'
   */
  footerHeight?: string;
  /**
   * footer background color
   * @default '#fff'
   */
  footerBgColor: string;

  /**
   * item padding left
   * @default '20px'
   */
  footerItemPaddingLeft?: string;
  /**
   * custom scss
   * @default '''
   */
  customScss: string;
}

// styled components
export interface SimpleFooterWrapperStProps {
  /**
   * footer height css
   */
  footerHeight: string;
  /**
   * footer background color
   */
  footerBgColor: string;

  customScss: string;
}

export interface SimpleFooterItemStProps {
  footerItemPaddingLeft: string;

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

export interface SimpleFooterCopyrightTextStProps {
  footerCopyrightTextColor: string;
}
