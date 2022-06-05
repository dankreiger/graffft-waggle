import { Container } from '@graffft-waggle/container';
import { NavItem } from '@graffft-waggle/expandable-side-nav';
import React, { FC } from 'react';
import {
  SimpleFooterContentWrapperSt,
  SimpleFooterCopyrightTextSt,
  SimpleFooterItemSt,
  SimpleFooterItemsWrapperSt,
  SimpleFooterWrapperSt,
} from './SimpleFooter.styles';
import { SimpleFooterProps } from './types/SimpleFooter.interfaces';

export const SimpleFooter: FC<SimpleFooterProps> = ({
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
