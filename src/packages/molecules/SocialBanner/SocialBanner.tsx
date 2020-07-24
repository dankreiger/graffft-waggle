import React from 'react';
import { Icon } from '@graffft-waggle/icon';
import {
  SocialBannerWrapperSt,
  SocialBannerItemSt,
} from './SocialBanner.styles';
import { SocialBannerProps } from './types/SocialBanner.interfaces';
import { SocialBannerDirection } from './types/SocialBanner.enums';

const SocialBanner: React.FC<SocialBannerProps> = ({
  buttonLinks,
  linkSize = 24,
  paddingSize = 4,
  itemMargin = '5px',
  direction = SocialBannerDirection.HORIZONTAL,
  customScss = '',
}) => (
  <SocialBannerWrapperSt
    direction={direction}
    customScss={customScss}
    data-testid="social-banner-wrapper"
  >
    {buttonLinks.map(({ iconTitle, buttonColor, iconColor, href }) => (
      <SocialBannerItemSt
        key={iconTitle}
        data-testid={`social-banner-item-${iconTitle}`}
        buttonColor={buttonColor}
        linkSize={linkSize}
        paddingSize={paddingSize}
        itemMargin={itemMargin}
        href={href}
      >
        <Icon
          title={iconTitle}
          color={iconColor}
          size={`${linkSize - paddingSize * 2}px`}
        />
      </SocialBannerItemSt>
    ))}
  </SocialBannerWrapperSt>
);

export { SocialBanner };
