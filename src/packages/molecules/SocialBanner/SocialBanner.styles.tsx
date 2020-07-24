import styled from 'styled-components';
import {
  SocialBannerItemProps,
  SocialBannerWrapperProps,
} from './types/SocialBanner.interfaces';
import { SocialBannerDirection } from './types/SocialBanner.enums';

export const SocialBannerWrapperSt = styled.div<SocialBannerWrapperProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === SocialBannerDirection.VERTICAL ? 'column' : 'row'};
  ${({ customScss }) => customScss};
`;

export const SocialBannerItemSt = styled.a<SocialBannerItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
  background-color: ${({ buttonColor }) => buttonColor};
  width: ${({ linkSize }) => `${linkSize}px`};
  height: ${({ linkSize }) => `${linkSize}px`};
  margin: ${({ itemMargin }) => itemMargin};
  padding: ${({ paddingSize }) => `${paddingSize}px`};
  transition: transform 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;
