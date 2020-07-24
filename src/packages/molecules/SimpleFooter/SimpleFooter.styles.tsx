import styled from 'styled-components';
import {
  SimpleFooterWrapperStProps,
  SimpleFooterItemStProps,
  SimpleFooterCopyrightTextStProps,
} from './types/SimpleFooter.interfaces';

export const SimpleFooterWrapperSt = styled.footer<SimpleFooterWrapperStProps>`
  display: flex;
  align-items: center;
  height: ${({ footerHeight }) => footerHeight};
  background-color: ${({ footerBgColor }) => footerBgColor};

  ${({ customScss }) => customScss}
`;

export const SimpleFooterContentWrapperSt = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const SimpleFooterCopyrightTextSt = styled.div<
  SimpleFooterCopyrightTextStProps
>`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${({ footerCopyrightTextColor }) => footerCopyrightTextColor};
`;

export const SimpleFooterItemsWrapperSt = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const SimpleFooterItemSt = styled.div<SimpleFooterItemStProps>`
  color: ${({ navItemColor }) => navItemColor};
  display: flex;
  height: 100%;
  align-items: center;
  &:hover {
    color: ${({ navItemHoverColor }) => navItemHoverColor};
    background-color: ${({ navItemBgHoverColor }) => navItemBgHoverColor};
  }
  > * {
    padding-left: ${({ footerItemPaddingLeft }) => footerItemPaddingLeft};
  }
  * {
    color: ${({ navItemColor }) => navItemColor};
    display: flex;
    height: 100%;
    align-items: center;
    &:hover {
      color: ${({ navItemHoverColor }) => navItemHoverColor};
    }
  }
`;
