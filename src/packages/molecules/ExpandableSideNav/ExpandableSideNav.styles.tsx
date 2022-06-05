import styled from 'styled-components';
import {
  ExpandableSideNavContentWrapperStProps,
  ExpandableSideNavItemStProps,
  ExpandableSideNavWrapperStProps,
} from './types/ExpandableSideNav.interfaces';

const getOverlay = ({
  isExpanded,
  expandableSideNavBgOverlayColor,
}: {
  isExpanded: boolean;
  expandableSideNavBgOverlayColor: string;
}) => `
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${expandableSideNavBgOverlayColor};
    opacity: ${isExpanded ? '1' : '0'};
    will-change: opacity;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ExpandableSideNavWrapperSt = styled.div.attrs<ExpandableSideNavWrapperStProps>(
  ({ isExpanded }) => ({
    tabIndex: isExpanded ? '-1' : undefined,
  })
)<ExpandableSideNavWrapperStProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${({ isExpanded }) => (isExpanded ? 'auto' : 'none')};
  z-index: ${({ expandableSideNavZIndex }) => expandableSideNavZIndex};
  ${getOverlay}
`;

const getTransform = ({
  isExpanded,
  isSetToTheLeftSide,
}: ExpandableSideNavContentWrapperStProps): string => {
  let translateXPercentage = 'translateX(190%)';
  if (isSetToTheLeftSide) {
    translateXPercentage = 'translateX(-110%)';
  }

  if (isExpanded) {
    translateXPercentage = 'none';
  }
  return translateXPercentage;
};

export const ExpandableSideNavContentWrapperSt = styled.div<ExpandableSideNavContentWrapperStProps>`
  position: relative;
  width: 90%;
  max-width: 268px;
  margin-left: ${({ isSetToTheLeftSide }) =>
    isSetToTheLeftSide ? '0px' : 'auto'};
  background: ${({ expandableSideNavBgColor }) => expandableSideNavBgColor};
  height: 100%;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.4);
  transition: transform 250ms;
  transform: ${getTransform};
  display: flex;
  flex-direction: column;
  will-change: transform;
`;

const getSideNavPadding =
  (isCloseIcon: boolean = false) =>
  ({
    sideNavItemPadding,
    isSetToTheLeftSide,
  }: {
    sideNavItemPadding: string;
    isSetToTheLeftSide: boolean;
  }) => {
    if (isSetToTheLeftSide) {
      return `padding-${
        isCloseIcon ? 'left' : 'right'
      }: ${sideNavItemPadding};`;
    }
    return `padding-${isCloseIcon ? 'right' : 'left'}: ${sideNavItemPadding};`;
  };

export const ExpandableSideNavHeaderSt = styled.div<{
  isSetToTheLeftSide: boolean;
  sideNavHeaderHeight: string;
  sideNavItemPadding: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ sideNavHeaderHeight }) => sideNavHeaderHeight};
  ${getSideNavPadding()}
`;

export const ExpandableSideNavHeaderLogoSt = styled.div`
  min-height: 24px;
`;

export const ExpandableSideNavCloseButtonWrapperSt = styled.div<{
  isSetToTheLeftSide: boolean;
  sideNavItemPadding: string;
}>`
  ${getSideNavPadding(true)}
`;

export const ExpandableSideNavItemsSt = styled.div``;
export const ExpandableSideNavItemSt = styled.div<ExpandableSideNavItemStProps>`
  display: flex;
  align-items: center;
  color: ${({ navItemColor }) => navItemColor};
  height: ${({ sideNavItemHeight }) => sideNavItemHeight};
  ${getSideNavPadding()}
  * {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${({ navItemColor }) => navItemColor};
  }
  &:hover {
    background-color: ${({ navItemHoverBgColor }) => navItemHoverBgColor};
    color: ${({ navItemHoverColor }) => navItemHoverColor};
    * {
      color: ${({ navItemHoverColor }) => navItemHoverColor};
    }
  }
`;
