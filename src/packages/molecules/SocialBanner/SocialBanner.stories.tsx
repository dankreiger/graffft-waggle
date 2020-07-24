import React from 'react';
import { SocialBanner } from './index';
import { IconType } from '@graffft-waggle/icon';
import { SocialBannerDirection } from './types/SocialBanner.enums';
import { SocialBannerProps } from './types/SocialBanner.interfaces';

export default {
  title: 'Molecules/SocialBanner',
  component: SocialBanner,
};

const demoLinks = [
  {
    iconTitle: IconType.LINKEDIN,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://www.linkedin.com/in/dankreiger/',
  },
  {
    iconTitle: IconType.CODEPEN,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://codepen.io/dankreiger5/',
  },
  {
    iconTitle: IconType.STACKOVERFLOW,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://stackoverflow.com/users/3922099/dan-kreiger',
  },
  {
    iconTitle: IconType.GITHUB,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'https://github.com/dankreiger',
  },
  {
    iconTitle: IconType.GMAIL,
    iconColor: '#fff',
    buttonColor: '#009DFF',
    href: 'mailto:dankreiger@gmail.com',
  },
];

export const Horizontal = () => <SocialBanner buttonLinks={demoLinks} />;

export const Vertical = () => (
  <SocialBanner
    buttonLinks={demoLinks}
    direction={SocialBannerDirection.VERTICAL}
  />
);

export const SetProps = (args: SocialBannerProps) => (
  <SocialBanner {...args} direction={SocialBannerDirection.VERTICAL} />
);
const args: SocialBannerProps = {
  buttonLinks: demoLinks,
  direction: SocialBannerDirection.HORIZONTAL,
  paddingSize: 4,
  linkSize: 24,
  customScss: '',
};

SetProps.args = args;
