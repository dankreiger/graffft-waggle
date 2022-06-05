import { generateContainerCss } from '@graffft-waggle/container';
import styled, { css } from 'styled-components';
import { KopfHeaderNavItemsStTestID } from './Kopf';
import { KopfHeaderLogoPostion } from './Kopf.enums';
import {
  KopfContainerStProps,
  KopfHeaderMobileButtonStProps,
  KopfHeaderNavItemStProps,
  KopfHeaderNavItemsWrapper,
  KopfInnerWrapperStProps,
  KopfWrapperStProps,
} from './Kopf.interfaces';

const setPosition = ({ isFixed }: { isFixed: boolean }) => {
  if (isFixed) {
    return `
      position: fixed;
      top: 0;
      left: 0;
    `;
  } else {
    return `
      position: relative;
    `;
  }
};

export const KopfWrapperSt = styled.header.attrs({
  role: 'navigation',
})<KopfWrapperStProps>`
  ${setPosition}
  z-index: ${({ headerZIndex }) => headerZIndex};
  height: ${({ headerHeight }) => headerHeight};
  box-shadow: ${({ headerBoxShadow }) => headerBoxShadow};
  background-color: ${({ headerBackgroundColor }) => headerBackgroundColor};
  width: 100%;
  font-size: 18px;
  z-index: 1;
  ${({ customScss }) => customScss};
`;

export const KopfContainerSt = styled.div<KopfContainerStProps>`
  ${generateContainerCss as (props: KopfContainerStProps) => string}
  display: flex;
  align-items: center;
  height: 100%;
`;
export const KopfInnerWrapperSt = styled.div<KopfInnerWrapperStProps>`
  max-width: ${({ headerMaxWidth }) => headerMaxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${({ headerMobilePadding }) => headerMobilePadding};

  ${({ desktopMinWidth }) => css`
    @media (min-width: ${desktopMinWidth}px) {
      padding: ${({ headerPadding }: { headerPadding: string }) =>
        headerPadding};
    }
  `}
`;
export const KopfLogoSt = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  order: ${(props: { headerLogoPosition: KopfHeaderLogoPostion }) =>
    props.headerLogoPosition === KopfHeaderLogoPostion.LEFT ? '-1' : '1'};
`;

export const KopfHeaderNavItemsSt = styled.div.attrs<KopfHeaderNavItemsWrapper>(
  (props) => ({
    'data-testid': KopfHeaderNavItemsStTestID,
    ...props,
  })
)`
  display: none;

  align-items: center;
  height: 100%;

  transform: ${({
    headerNavItemHorizontalPadding,
    headerLogoPosition,
  }: KopfHeaderNavItemsWrapper) =>
    `translateX(${
      headerLogoPosition === KopfHeaderLogoPostion.LEFT
        ? headerNavItemHorizontalPadding
        : `-${headerNavItemHorizontalPadding}`
    })`};
  ${({ desktopMinWidth }: KopfHeaderNavItemsWrapper) => `
    @media (min-width: ${desktopMinWidth}px) {
      display: flex;
    }`}
`;

export const KopfHeaderNavItemSt = styled.div<KopfHeaderNavItemStProps>`
  display: flex;
  align-items: center;
  height: 100%;
  transition: background-color 250ms, color 250ms;

  color: ${({ navItemColor }) => navItemColor};
  > * {
    display: flex;
    align-items: center;
    height: 100%;
    color: ${({ navItemColor }) => navItemColor};
    padding-left: ${({ headerNavItemHorizontalPadding }) =>
      headerNavItemHorizontalPadding};
    padding-right: ${({ headerNavItemHorizontalPadding }) =>
      headerNavItemHorizontalPadding};
  }

  &:hover {
    color: ${({ navItemHoverColor }) => navItemHoverColor};
    background-color: ${({ navItemHoverBgColor }) => navItemHoverBgColor};
    > * {
      color: ${({ navItemHoverColor }) => navItemHoverColor};
    }
  }
`;

export const KopfHeaderMobileButtonSt = styled.div.attrs({
  'aria-label': 'Open menu',
})<KopfHeaderMobileButtonStProps>`
  display: flex;
  align-items: center;
  height: 100%;
  order: ${({ headerLogoPosition }) =>
    headerLogoPosition === KopfHeaderLogoPostion.LEFT ? '-1' : '0'};
  ${({ desktopMinWidth }) => `
    @media (min-width: ${desktopMinWidth}px) {
      display: none;
    }`}
`;

export const KopfSpacerSt = styled.div<{ headerHeight: string }>`
  height: ${({ headerHeight }) => headerHeight};
`;
