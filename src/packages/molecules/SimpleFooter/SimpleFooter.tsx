import React from 'react';
import { SimpleFooterProps } from './types/SimpleFooter.interfaces';
import { Container } from '@graffft-waggle/container';
import {
  SimpleFooterWrapperSt,
  SimpleFooterContentWrapperSt,
  SimpleFooterItemsWrapperSt,
  SimpleFooterItemSt,
  SimpleFooterCopyrightTextSt,
} from './SimpleFooter.styles';
import { NavItem } from '@graffft-waggle/expandable-side-nav';

export const SimpleFooter: React.FC<SimpleFooterProps> = ({
  footerCopyrightText = new Date().getFullYear(),
  footerCopyrightTextColor = '#fff',
  footerItems = [],
  footerHeight = '44px',
  footerBgColor = '#fff',
  footerItemPaddingLeft = '20px',
  customScss = '',
}) => {
  return (
    <SimpleFooterWrapperSt
      footerHeight={footerHeight}
      footerBgColor={footerBgColor}
      customScss={customScss}
    >
      <Container fullHeight>
        <SimpleFooterContentWrapperSt>
          <SimpleFooterCopyrightTextSt
            footerCopyrightTextColor={footerCopyrightTextColor}
          >
            {footerCopyrightText}
          </SimpleFooterCopyrightTextSt>
          <SimpleFooterItemsWrapperSt>
            {footerItems.map((item: NavItem) => (
              <SimpleFooterItemSt
                key={item.key}
                footerItemPaddingLeft={footerItemPaddingLeft}
                navItemColor={item.navItemColor}
                navItemHoverColor={item.navItemHoverColor}
                navItemBgHoverColor={item.navItemBgHoverColor}
              >
                {item.navItem}
              </SimpleFooterItemSt>
            ))}
          </SimpleFooterItemsWrapperSt>
        </SimpleFooterContentWrapperSt>
      </Container>
    </SimpleFooterWrapperSt>
  );
};
